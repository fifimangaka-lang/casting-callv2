import type { Character } from './types';

export const MANGA_TITLE = 'Ye Olde Treehouse';

// IMPORTANT: Replace this with your actual Google Form embed URL.
// To get the embed URL, go to your Google Form, click "Send", go to the "<>" (Embed) tab, and copy the src from the iframe code.
export const GOOGLE_FORM_EMBED_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSdf_blah_blah_placeholder/viewform?embedded=true';

export const OST_PLAYLIST = [
  {
    title: "Atheria's Echoes - Part 1",
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  },
  {
    title: "Atheria's Echoes - Part 2",
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  },
  {
    title: "Atheria's Echoes - Part 3",
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
  },
];

const voiceExampleUrls = [
  'https://www.soundjay.com/buttons/sounds/button-1.mp3',
  'https://www.soundjay.com/buttons/sounds/button-2.mp3',
  'https://www.soundjay.com/buttons/sounds/button-3.mp3',
  'https://www.soundjay.com/buttons/sounds/button-4.mp3',
];

export const CHARACTERS: Character[] = [
  {
    id: 1,
    name: 'Rou Akei',
    role: 'The Unlikely Captain',
    bio: 'Rou (Roo) is the 25-year-old Captain of Viveform’s top protection squad, based in New Alta Izera, Glory Peak. She’s a bit unorthodox, often charging ahead before fully thinking things through, but that same impulsiveness is driven by passion, loyalty, and an unshakable sense of justice.',
    personality:
      'Impulsive but heartfelt, she acts on instinct and emotion more than caution.',
    imageUrls: [
      'https://files.catbox.moe/du4qc7.png',
      'https://picsum.photos/seed/kaelen2/600/800',
      'https://picsum.photos/seed/kaelen3/600/800',
    ],
    voiceExamples: voiceExampleUrls,
  },
  {
    id: 2,
    name: 'Fig Noston',
    role: 'The Genius Geologist',
    bio: 'A young prodigy from a secluded monastery who can channel the power of constellations. She is naive to the ways of the world but possesses immense, untamed power.',
    personality:
      'Curious, optimistic, kind-hearted, but terrified of her own destructive potential.',
    imageUrls: [
      'https://files.catbox.moe/d8czzw.png',
      'https://picsum.photos/seed/lyra2/600/800',
      'https://picsum.photos/seed/lyra3/600/800',
      'https://picsum.photos/seed/lyra4/600/800',
    ],
    voiceExamples: voiceExampleUrls,
  },
  {
    id: 3,
    name: 'Drendith Nosferi',
    role: 'The Dark Showman',
    bio: 'A gentle giant from a mountain tribe, bound by an ancient oath to protect the sacred lands. He joins the quest when his home is threatened by a dark blight.',
    personality:
      'Protective, patient, a man of few words, finds solace in nature, incredibly strong and resilient.',
    imageUrls: [
      'https://picsum.photos/seed/lyra3/600/800',
      'https://picsum.photos/seed/grak1/600/800',
      'https://picsum.photos/seed/grak2/600/800',
    ],
    voiceExamples: voiceExampleUrls,
  },
  {
    id: 4,
    name: 'Ender Valen',
    role: 'The Kingmaker',
    bio: "A noblewoman and spymaster who navigates the treacherous courts of the kingdom. She uses wit and charm as her primary weapons, funding the heroes' journey for her own political gain.",
    personality:
      'Charismatic, manipulative, intelligent, always three steps ahead, her true motives are a mystery.',
    imageUrls: [
      'https://picsum.photos/seed/seraphina1/600/800',
      'https://picsum.photos/seed/seraphina2/600/800',
      'https://picsum.photos/seed/seraphina3/600/800',
    ],
    voiceExamples: voiceExampleUrls,
  },
  {
    id: 5,
    name: 'Kenzi Akimoto',
    role: 'The Royal Rogue',
    bio: "A noblewoman and spymaster who navigates the treacherous courts of the kingdom. She uses wit and charm as her primary weapons, funding the heroes' journey for her own political gain.",
    personality:
      'Charismatic, manipulative, intelligent, always three steps ahead, her true motives are a mystery.',
    imageUrls: [
      'https://picsum.photos/seed/seraphina1/600/800',
      'https://picsum.photos/seed/seraphina2/600/800',
      'https://picsum.photos/seed/seraphina3/600/800',
    ],
    voiceExamples: voiceExampleUrls,
  },
  {
    id: 6,
    name: 'Solomon Vex',
    role: 'The Flame Spirit',
    bio: "A noblewoman and spymaster who navigates the treacherous courts of the kingdom. She uses wit and charm as her primary weapons, funding the heroes' journey for her own political gain.",
    personality:
      'Charismatic, manipulative, intelligent, always three steps ahead, her true motives are a mystery.',
    imageUrls: [
      'https://picsum.photos/seed/seraphina1/600/800',
      'https://picsum.photos/seed/seraphina2/600/800',
      'https://picsum.photos/seed/seraphina3/600/800',
    ],
    voiceExamples: voiceExampleUrls,
  },
  {
    id: 7,
    name: 'Boca',
    role: 'The Cutie',
    bio: "A noblewoman and spymaster who navigates the treacherous courts of the kingdom. She uses wit and charm as her primary weapons, funding the heroes' journey for her own political gain.",
    personality:
      'Charismatic, manipulative, intelligent, always three steps ahead, her true motives are a mystery.',
    imageUrls: [
      'https://picsum.photos/seed/seraphina1/600/800',
      'https://picsum.photos/seed/seraphina2/600/800',
      'https://picsum.photos/seed/seraphina3/600/800',
    ],
    voiceExamples: voiceExampleUrls,
  },
  {
    id: 8,
    name: 'Kaz Greenfield',
    role: 'The Gifted Soldier',
    bio: "A noblewoman and spymaster who navigates the treacherous courts of the kingdom. She uses wit and charm as her primary weapons, funding the heroes' journey for her own political gain.",
    personality:
      'Charismatic, manipulative, intelligent, always three steps ahead, her true motives are a mystery.',
    imageUrls: [
      'https://picsum.photos/seed/seraphina1/600/800',
      'https://picsum.photos/seed/seraphina2/600/800',
      'https://picsum.photos/seed/seraphina3/600/800',
    ],
    voiceExamples: voiceExampleUrls,
  },
  {
    id: 9,
    name: 'Lousia De Luz',
    role: 'The Training Captain',
    bio: "A noblewoman and spymaster who navigates the treacherous courts of the kingdom. She uses wit and charm as her primary weapons, funding the heroes' journey for her own political gain.",
    personality:
      'Charismatic, manipulative, intelligent, always three steps ahead, her true motives are a mystery.',
    imageUrls: [
      'https://picsum.photos/seed/seraphina1/600/800',
      'https://picsum.photos/seed/seraphina2/600/800',
      'https://picsum.photos/seed/seraphina3/600/800',
    ],
    voiceExamples: voiceExampleUrls,
  },
];
