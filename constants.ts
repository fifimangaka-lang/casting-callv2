import type { Character } from './types';

export const MANGA_TITLE = 'Ye Olde Treehouse';

// IMPORTANT: Replace this with your actual Google Form embed URL.
// To get the embed URL, go to your Google Form, click "Send", go to the "<>" (Embed) tab, and copy the src from the iframe code.
export const GOOGLE_FORM_EMBED_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLScSLINyvmaTpTHY6ZpncWQg5Y85QBr2CHtIul5ZT9-0kXFk-A/viewform?embedded=true"';

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

export const GLOBAL_PRONUNCIATIONS = [
  { term: 'Rou Akei', phonetic: 'ROO Ahh-KAY', category: 'name' },
  { term: 'Yoroua', phonetic: 'yo-ROU-UHH', category: 'name' },
  { term: 'Fig Noston', phonetic: 'FIG NAH-stun', category: 'name' },
  {
    term: 'Drendith Nosferi',
    phonetic: 'DREN-dith NOS-FAIRY',
    category: 'name',
  },
  { term: 'Ender Valen', phonetic: 'EN-der VAAY-len', category: 'name' },
  {
    term: 'Kenzi Akimoto',
    phonetic: 'KEN-zee AH-kee-moh-toh',
    category: 'name',
  },
  { term: 'Solomon Vex', phonetic: 'SAHL-uhh-muhn VEX', category: 'name' },
  { term: 'Boca', phonetic: 'BOH-kah', category: 'name' },
  { term: 'Kaz Greenfield', phonetic: 'KAHZ GREEN-field', category: 'name' },
  { term: 'Louisa De Luz', phonetic: 'LOO-ee-sah DEH LOOZ', category: 'name' },
  { term: 'Augur', phonetic: 'Ahh-guhr', category: 'term' },
  { term: 'Viveform', phonetic: 'VIH-VIH-form', category: 'term' },
  {
    term: 'New Alta Izera',
    phonetic: 'NEW ALL-tah ee-ZEER-ah',
    category: 'location',
  },
  {
    term: 'New Alta Dercha',
    phonetic: 'NEW ALL-tah DER-chah',
    category: 'location',
  },
  { term: 'Teleregnum', phonetic: 'TEL-eh-REG-num', category: 'term' },
  { term: 'Admavis', phonetic: 'AD-may-vis', category: 'term' },
  { term: 'Spirignum', phonetic: 'SPIH-rihg-num', category: 'term' },
  { term: 'Perfissio', phonetic: 'per-FEE-SIOH', category: 'term' },
];

const voiceRou = [
  'public/assets/Rou1.wav',
  'public/assets/Rou2.wav',
  'public/assets/Rou3.wav',
  'public/assets/Rou4.wav',
];

const voiceFig = [
  'public/assets/Fig1.wav',
  'public/assets/Fig2.wav',
  'public/assets/Fig3.wav',
  'public/assets/Fig4.wav',
];

const voiceEnder = [
  'public/assets/Ender1.wav',
  'public/assets/Ender2.wav',
  'public/assets/Ender6.wav',
  'public/assets/Ender4.wav',
  'public/assets/Ender5.wav',
  'public/assets/Ender3.wav',
];

const voiceVex = [
  'public/assets/Vex1.wav',
  'public/assets/Vex2.wav',
  'public/assets/Vex3.wav',
  'public/assets/Vex4.wav',
];

const voiceKenzi = [
  'public/assets/Kenzi1.wav',
  'public/assets/Kenzi2.wav',
  'public/assets/Kenzi3.wav',
  'public/assets/Kenzi4.wav',
];

const voiceBoca = [
  'public/assets/Boca1.wav',
  'public/assets/Boca2.wav',
  'public/assets/Boca3.wav',
  'public/assets/Boca4.wav',
];

const voiceKaz = [
  'public/assets/Kaz1.wav',
  'public/assets/Kaz2.wav',
  'public/assets/Kaz3.wav',
  'public/assets/Kaz4.wav',
];

const voiceDrendith = [
  'public/assets/Drendith1.wav',
  'public/assets/Drendith2.wav',
  'public/assets/Drendith3.wav',
  'public/assets/Drendith4.wav',
  'public/assets/Drendith5.wav',
];

const voiceLouisa = [
  'public/assets/Louisa1.wav',
  'public/assets/Louisa2.wav',
  'public/assets/Louisa3.wav',
  'public/assets/Louisa4.wav',
];

export const CHARACTERS: Character[] = [
  {
    id: 1,
    name: 'Rou Akei',
    role: 'The Unlikely Captain',
    bio: "Rou is the Captain of Viveform’s top protection squad, based in New Alta Izera, Glory Peak. She’s a bit unorthodox, often charging ahead before fully thinking things through, but that same impulsiveness is driven by passion, loyalty, and an unshakable sense of justice. She's determined to prove herself to the world.",
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
