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

const voiceRou = [
  'assets/audio/Rou1.wav',
  'assets/audio/Rou2.wav',
  'assets/audio/Rou3.wav',
  'assets/audio/Rou4.wav',
];

const voiceFig = [
  'assets/audio/Fig1.wav',
  'assets/audio/Fig2.wav',
  'assets/audio/Fig3.wav',
  'assets/audio/Fig4.wav',
];

const voiceEnder = [
  'assets/audio/Ender1.wav',
  'assets/audio/Ender2.wav',
  'assets/audio/Ender6.wav',
  'assets/audio/Ender4.wav',
  'assets/audio/Ender5.wav',
  'assets/audio/Ender3.wav',
];

const voiceVex = [
  'assets/audio/Vex1.wav',
  'assets/audio/Vex2.wav',
  'assets/audio/Vex3.wav',
  'assets/audio/Vex4.wav',
];

const voiceKenzi = [
  'assets/audio/Kenzi1.wav',
  'assets/audio/Kenzi2.wav',
  'assets/audio/Kenzi3.wav',
  'assets/audio/Kenzi4.wav',
];

const voiceBoca = [
  'assets/audio/Boca1.wav',
  'assets/audio/Boca2.wav',
  'assets/audio/Boca3.wav',
  'assets/audio/Boca4.wav',
];

const voiceKaz = [
  'assets/audio/Kaz1.wav',
  'assets/audio/Kaz2.wav',
  'assets/audio/Kaz3.wav',
  'assets/audio/Kaz4.wav',
];

const voiceDrendith = [
  'assets/audio/Drendith1.wav',
  'assets/audio/Drendith2.wav',
  'assets/audio/Drendith3.wav',
  'assets/audio/Drendith4.wav',
  'assets/audio/Drendith5.wav',
];

const voiceLouisa = [
  'assets/audio/Louisa1.wav',
  'assets/audio/Louisa2.wav',
  'assets/audio/Louisa3.wav',
  'assets/audio/Louisa4.wav',
];

export const CHARACTERS: Character[] = [
  {
    id: 1,
    name: 'Rou Akei',
    role: 'The Unlikely Captain',
    bio: "Rou (Roo) is the Captain of Viveform’s top protection squad, based in New Alta Izera, Glory Peak. She’s a bit unorthodox, often charging ahead before fully thinking things through, but that same impulsiveness is driven by passion, loyalty, and an unshakable sense of justice. She's determined to prove herself to the world.",
    personality:
      'Impulsive but heartfelt, she acts on instinct and emotion more than caution.',
    imageUrls: [
      'https://files.catbox.moe/du4qc7.png',
      'https://files.catbox.moe/zh1ga1.png',
      'https://files.catbox.moe/nlgbi0.png',
      'https://files.catbox.moe/6afrsp.png',
    ],
    voiceExamples: voiceRou,
    voiceRef: 'Judy Hopps - Zootopia (Ginnifer Goodwin)',
  },
  {
    id: 2,
    name: 'Fig Noston',
    role: 'The Genius Geologist',
    bio: 'A genius geologist',
    personality:
      'Calm, thoughtful and highly intelligent, Fig is the stability that keeps the team together.',
    imageUrls: [
      'https://files.catbox.moe/d8czzw.png',
      'https://files.catbox.moe/mwluwc.png',
      'https://files.catbox.moe/9k8ju1.png',
      'https://files.catbox.moe/fu9hqq.png',
    ],
    voiceExamples: voiceFig,
    voiceRef: 'Elincia - Fire Emblem (Amanda Miller)',
  },
  {
    id: 3,
    name: 'Drendith Nosferi',
    role: 'The Dark Showman',
    bio: 'A gentle giant from a mountain tribe, bound by an ancient oath to protect the sacred lands. He joins the quest when his home is threatened by a dark blight.',
    personality:
      'Protective, patient, a man of few words, finds solace in nature, incredibly strong and resilient.',
    imageUrls: [
      'https://files.catbox.moe/ds8hwk.png',
      'https://files.catbox.moe/7731og.png',
      'https://files.catbox.moe/0wyrzj.png',
      'https://files.catbox.moe/617zi5.png',
    ],
    voiceExamples: voiceDrendith,
    voiceRef: "Astarion - Baldur's Gate 3 (Neil Newbon)",
  },
  {
    id: 4,
    name: 'Ender Valen',
    role: 'The Kingmaker',
    bio: "A noblewoman and spymaster who navigates the treacherous courts of the kingdom. She uses wit and charm as her primary weapons, funding the heroes' journey for her own political gain.",
    personality:
      'Charismatic, manipulative, intelligent, always three steps ahead, her true motives are a mystery.',
    imageUrls: [
      'https://files.catbox.moe/af4rjx.png',
      'https://files.catbox.moe/4xnnbz.png',
      'https://files.catbox.moe/3tcekr.png',
      'https://files.catbox.moe/2qp4cu.png',
    ],
    voiceExamples: voiceEnder,
    voiceRef: "Tav 1 - Baldur's Gate 3 (Josh Wichard)",
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
      'https://files.catbox.moe/26zano.png',
      'https://files.catbox.moe/j2r5kz.png',
      'https://files.catbox.moe/qhm6l1.png',
    ],
    voiceExamples: voiceKenzi,
    voiceRef: 'Yuffie Kisaragi - Final Fantasy VII Remake (Suzie Yeung)',
  },
  {
    id: 6,
    name: 'Solomon Vex',
    role: 'The Flame Spirit',
    bio: "A noblewoman and spymaster who navigates the treacherous courts of the kingdom. She uses wit and charm as her primary weapons, funding the heroes' journey for her own political gain.",
    personality:
      'Charismatic, manipulative, intelligent, always three steps ahead, her true motives are a mystery.',
    imageUrls: [
      'https://files.catbox.moe/5l8vxi.png',
      'https://files.catbox.moe/a9jc38.png',
      'https://files.catbox.moe/skwju3.png',
      'https://files.catbox.moe/44lrk2.png',
    ],
    voiceExamples: voiceVex,
    voiceRef: 'Prompto - Final Fantasy XV (Robbie Daymond)',
  },
  {
    id: 7,
    name: 'Boca',
    role: "Vex's Pal",
    bio: "A noblewoman and spymaster who navigates the treacherous courts of the kingdom. She uses wit and charm as her primary weapons, funding the heroes' journey for her own political gain.",
    personality:
      'Charismatic, manipulative, intelligent, always three steps ahead, her true motives are a mystery.',
    imageUrls: [
      'https://files.catbox.moe/2pda2k.png',
      'https://files.catbox.moe/epol49.png',
      'https://files.catbox.moe/dp6gdm.png',
      'https://files.catbox.moe/d867vp.png',
    ],
    voiceExamples: voiceBoca,
    voiceRef: "Tails - Sonic the Hedgehog (Colleen O'Shaughnessey)",
  },
  {
    id: 8,
    name: 'Kaz Greenfield',
    role: 'The Gifted Soldier',
    bio: "A noblewoman and spymaster who navigates the treacherous courts of the kingdom. She uses wit and charm as her primary weapons, funding the heroes' journey for her own political gain.",
    personality:
      'Charismatic, manipulative, intelligent, always three steps ahead, her true motives are a mystery.',
    imageUrls: [
      'https://files.catbox.moe/wbjbcj.png',
      'https://files.catbox.moe/v0bm8z.png',
      'https://files.catbox.moe/mwvkyp.png',
      'https://files.catbox.moe/iv04lv.png',
    ],
    voiceExamples: voiceKaz,
    voiceRef: 'Rock Howard - Fatal Fury (Griffin Puatu)',
  },
  {
    id: 9,
    name: 'Louisa De Luz',
    role: 'The Training Captain',
    bio: "A noblewoman and spymaster who navigates the treacherous courts of the kingdom. She uses wit and charm as her primary weapons, funding the heroes' journey for her own political gain.",
    personality:
      'Charismatic, manipulative, intelligent, always three steps ahead, her true motives are a mystery.',
    imageUrls: [
      'https://picsum.photos/seed/seraphina1/600/800',
      'https://files.catbox.moe/m4cd6g.png',
      'https://files.catbox.moe/1rvuwy.png',
      'https://files.catbox.moe/gk78a9.png',
    ],
    voiceExamples: voiceLouisa,
    voiceRef: 'Celica - Fire Emblem Warriors (Erica Lindbeck)',
  },
];
