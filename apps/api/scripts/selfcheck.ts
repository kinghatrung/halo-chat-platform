// Run: npx ts-node -T -r tsconfig-paths/register scripts/selfcheck.ts  (from apps/api)
import assert from 'node:assert/strict';
import { escapeRegex, toPageSize } from '@/helpers';

// Escaped user text is matched literally, never as a pattern.
assert.equal(new RegExp(escapeRegex('a.b(c)')).test('a.b(c)'), true);
assert.equal(new RegExp(escapeRegex('a.b')).test('axb'), false);
assert.doesNotThrow(() => new RegExp(escapeRegex('(((')));

// Page size is clamped to 1..100 with a fallback for junk input.
assert.equal(toPageSize('1000000'), 100);
assert.equal(toPageSize('0', 10), 10);
assert.equal(toPageSize('abc', 10), 10);
assert.equal(toPageSize('-5'), 1);
assert.equal(toPageSize('25'), 25);

// CLIENT_URL list is trimmed and loses trailing slashes (Origin headers never have one).
process.env.CLIENT_URL = 'http://localhost:3000/, https://chat.example.com';
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { corsOrigin } = require('@/config/cors');
assert.deepEqual(corsOrigin, ['http://localhost:3000', 'https://chat.example.com']);

console.log('selfcheck ok');
