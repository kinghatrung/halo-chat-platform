// Run: npm test --workspace=api   (starts a throwaway in-memory MongoDB; first run downloads mongod)
import { after, before, beforeEach, describe, test } from 'node:test';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

process.env.JWT_ACCESS_TOKEN ||= 'test-secret'; // attachments sign their URLs when serialized

import messageService from '@/services/messageService';
import User from '@/models/user';
import Conversation from '@/models/conversation';
import ConversationMember from '@/models/conversation_member';
import Message from '@/models/message';
import Attachment from '@/models/attachment';

let mongo: MongoMemoryServer;

const makeUser = (name: string) =>
  User.create({ username: name, email: `${name}@test.dev`, password: 'x'.repeat(60) });

const makeGroup = async (memberIds: mongoose.Types.ObjectId[]) => {
  const conversation = await Conversation.create({ type: 'group', name: 'g' });
  await ConversationMember.insertMany(
    memberIds.map((userId) => ({ conversationId: conversation._id, userId })),
  );
  return String(conversation._id);
};

const makeAttachment = (uploaderId: mongoose.Types.ObjectId) =>
  Attachment.create({
    uploaderId,
    fileName: 'a.png',
    publicId: 'p',
    resourceType: 'image',
    url: '/x',
    mimeType: 'image/png',
    size: 1,
  });

describe('messageService.sendMessage', () => {
  before(async () => {
    mongo = await MongoMemoryServer.create();
    await mongoose.connect(mongo.getUri());
  });
  after(async () => {
    await mongoose.disconnect();
    await mongo.stop();
  });
  beforeEach(async () => {
    await mongoose.connection.db!.dropDatabase();
  });

  test('links a fresh upload to the new message', async () => {
    const alice = await makeUser('alice');
    const bob = await makeUser('bob');
    const conv = await makeGroup([alice._id, bob._id]);
    const att = await makeAttachment(alice._id);

    const msg: any = await messageService.sendMessage(String(alice._id), conv, {
      type: 'image',
      attachmentIds: [String(att._id)],
    });

    const stored = await Attachment.findById(att._id);
    assert.equal(String(stored!.messageId), String(msg._id));
  });

  test('refuses to forward a file the sender cannot see, and leaves it untouched', async () => {
    const alice = await makeUser('alice');
    const carol = await makeUser('carol');
    const mallory = await makeUser('mallory');
    const privateConv = await makeGroup([alice._id, carol._id]);
    const malloryConv = await makeGroup([mallory._id, carol._id]);

    const att = await makeAttachment(alice._id);
    const original: any = await messageService.sendMessage(String(alice._id), privateConv, {
      type: 'image',
      attachmentIds: [String(att._id)],
    });

    await assert.rejects(
      messageService.sendMessage(String(mallory._id), malloryConv, {
        attachmentIds: [String(att._id)],
        isForwarded: true,
      }),
      /quyền truy cập/,
    );

    const stored = await Attachment.findById(att._id);
    assert.equal(String(stored!.messageId), String(original._id));
    assert.equal(await Message.countDocuments({ conversationId: malloryConv }), 0);
  });

  test('forwards a visible file without moving it out of the source chat', async () => {
    const alice = await makeUser('alice');
    const carol = await makeUser('carol');
    const dave = await makeUser('dave');
    const source = await makeGroup([alice._id, carol._id]);
    const target = await makeGroup([carol._id, dave._id]);

    const att = await makeAttachment(alice._id);
    const original: any = await messageService.sendMessage(String(alice._id), source, {
      type: 'image',
      attachmentIds: [String(att._id)],
    });

    const forwarded: any = await messageService.sendMessage(String(carol._id), target, {
      type: 'image',
      attachmentIds: [String(att._id)],
      isForwarded: true,
    });

    assert.equal(forwarded.isForwarded, true);
    assert.equal(forwarded.attachmentIds.length, 1);
    const stored = await Attachment.findById(att._id);
    assert.equal(String(stored!.messageId), String(original._id));
  });

  test('rejects client-made "system" messages', async () => {
    const alice = await makeUser('alice');
    const conv = await makeGroup([alice._id]);

    await assert.rejects(
      messageService.sendMessage(String(alice._id), conv, {
        type: 'system' as any,
        content: 'Admin đã ghim một tin nhắn',
      }),
      /không hợp lệ/,
    );
  });

  test('rejects a non-member', async () => {
    const alice = await makeUser('alice');
    const eve = await makeUser('eve');
    const conv = await makeGroup([alice._id]);

    await assert.rejects(
      messageService.sendMessage(String(eve._id), conv, { content: 'hi' }),
      /không phải thành viên/,
    );
  });
});
