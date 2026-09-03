export interface StoryGradient {
  id: string;
  name: string;
  css: string;
  colors: [string, string];
}

export const STORY_GRADIENTS: StoryGradient[] = [
  {
    id: 'sunset',
    name: 'Sunset Purple',
    css: 'linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%)',
    colors: ['#833ab4', '#fcb045'],
  },
  {
    id: 'ocean',
    name: 'Ocean Blue',
    css: 'linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)',
    colors: ['#00c6ff', '#0072ff'],
  },
  {
    id: 'emerald',
    name: 'Emerald Mint',
    css: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
    colors: ['#11998e', '#38ef7d'],
  },
  {
    id: 'neon',
    name: 'Neon Cyber',
    css: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
    colors: ['#0f0c29', '#24243e'],
  },
  {
    id: 'rose',
    name: 'Rose Gold',
    css: 'linear-gradient(135deg, #ff758c 0%, #ff7eb3 100%)',
    colors: ['#ff758c', '#ff7eb3'],
  },
  {
    id: 'fire',
    name: 'Fiery Orange',
    css: 'linear-gradient(135deg, #ff4e50 0%, #f9d423 100%)',
    colors: ['#ff4e50', '#f9d423'],
  },
];

export interface StoryFont {
  id: string;
  name: string;
  family: string;
}

export const STORY_FONTS: StoryFont[] = [
  { id: 'modern', name: 'Hiện đại', family: 'system-ui, -apple-system, sans-serif' },
  { id: 'serif', name: 'Trang trọng', family: 'Georgia, serif' },
  { id: 'handwriting', name: 'Viết tay', family: 'cursive, "Brush Script MT"' },
  { id: 'headline', name: 'Tiêu đề', family: '"Impact", "Arial Black", sans-serif' },
  { id: 'monospace', name: 'Mã hóa', family: 'monospace' },
];

export const STORY_STICKERS = ['❤️', '🔥', '🎉', '😍', '✨', '👑', '🌟', '🎵', '💯', '🚀'];

export interface StoryMusic {
  id: string;
  title: string;
  artist: string;
  audioUrl?: string;
}

export const STORY_MUSIC_LIST: StoryMusic[] = [
  { id: 'none', title: 'Không dùng nhạc', artist: '' },
  { id: 'chill', title: 'Chill Vibes', artist: 'Lo-Fi Lounge' },
  { id: 'acoustic', title: 'Acoustic Morning', artist: 'Guitar Acoustic' },
  { id: 'pop', title: 'Upbeat Pop', artist: 'Summer Beats' },
  { id: 'energetic', title: 'Energy Boost', artist: 'Electronic Pulse' },
];
