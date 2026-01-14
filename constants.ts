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
  { term: 'Perfissio', phonetic: 'per-FIH-SIOH', category: 'term' },
];

const voiceRou = [
  'assets/Rou1.wav',
  'assets/Rou2.wav',
  'assets/Rou3.wav',
  'assets/Rou4.wav',
];

const voiceFig = [
  'assets/Fig1.wav',
  'assets/Fig2.wav',
  'assets/Fig3.wav',
  'assets/Fig4.wav',
];

const voiceEnder = [
  'assets/Ender1.wav',
  'assets/Ender2.wav',
  'assets/Ender6.wav',
  'assets/Ender4.wav',
  'assets/Ender5.wav',
  'assets/Ender3.wav',
];

const voiceVex = [
  'assets/Vex1.wav',
  'assets/Vex2.wav',
  'assets/Vex3.wav',
  'assets/Vex4.wav',
];

const voiceKenzi = [
  'assets/Kenzi1.wav',
  'assets/Kenzi2.wav',
  'assets/Kenzi3.wav',
  'assets/Kenzi4.wav',
];

const voiceBoca = [
  'assets/Boca1.wav',
  'assets/Boca2.wav',
  'assets/Boca3.wav',
  'assets/Boca4.wav',
];

const voiceKaz = [
  'assets/Kaz1.wav',
  'assets/Kaz2.wav',
  'assets/Kaz3.wav',
  'assets/Kaz4.wav',
];

const voiceDrendith = [
  'assets/Drendith1.wav',
  'assets/Drendith2.wav',
  'assets/Drendith3.wav',
  'assets/Drendith4.wav',
  'assets/Drendith5.wav',
];

const voiceLouisa = [
  'assets/Louisa1.wav',
  'assets/Louisa2.wav',
  'assets/Louisa3.wav',
  'assets/Louisa4.wav',
];

export const CHARACTERS: Character[] = [
  {
    id: 1,
    name: 'Rou Akei',
    role: 'The Unlikely Captain',
    bio: "Rou is the Captain of Viveform’s top protection squad, based in New Alta Izera, Glory Peak. She’s a bit unorthodox, often charging ahead before fully thinking things through, but that same impulsiveness is driven by passion, loyalty, and an unshakable sense of justice. She's determined to prove herself to the world.",
    personality:
      'Impulsive but heartfelt, she acts on instinct and emotion more than caution. Bright and energetic, with a sassy undertone.',
    imageUrls: [
      'assets/RouPort.png',
      'assets/RouPage1.png',
      'assets/RouPage2.png',
      'assets/RouPage3.png',
    ],
    voiceExamples: voiceRou,
    voiceRef: 'Judy Hopps - Zootopia (Ginnifer Goodwin)',
  },
  {
    id: 2,
    name: 'Fig Noston',
    role: 'The Genius Geologist',
    bio: 'Fig Noston is the 23-year-old second-in-command of Viveform’s top protection squad for New Alta Izera, Glory Peak. She’s calm, thoughtful, and brilliant. She always seems to know what to do when things go sideways. But that all comes crashing down when a mysterious Sky Pirate digs up old debts, demanding payment for something Fig took from him, threatening to unravel the life she’s fought to build.',
    personality:
      'Calm, thoughtful and highly intelligent, Fig is the stability that keeps the team together.',
    imageUrls: [
      'assets/FigPort.png',
      'assets/FigPage1.png',
      'assets/FigPage2.png',
      'assets/FigPage3.png',
    ],
    voiceExamples: voiceFig,
    voiceRef: 'Elincia - Fire Emblem (Amanda Miller)',
  },
  {
    id: 3,
    name: 'Drendith Nosferi',
    role: 'The Dark Showman',
    bio: 'Drendith Nosferi comes from the legendary Nosferi family, a famed circus dynasty. He is motivated by a deep desire to restore his family’s honor and seek revenge against Viveform for their role in his family’s downfall.',
    personality: 'His flamboyant and showy exterior hides a darkness within.',
    imageUrls: [
      'assets/DrendithPort.png',
      'assets/DrenPage1.png',
      'assets/DrenPage2.png',
      'assets/DrenPage3.png',
    ],
    voiceExamples: voiceDrendith,
    voiceRef: "Astarion - Baldur's Gate 3 (Neil Newbon)",
  },
  {
    id: 4,
    name: 'Ender Valen',
    role: 'The Kingmaker',
    bio: 'Ender Valen leads Viveform’s military branch with unwavering discipline and a reputation for effectiveness that few dare question. Marked by the scar running down the left side of his face and body, Ender is as intimidating as he is respected, a figure known for his stoic presence and sharp command of any situation. Ender carries his own secrets, the largest of which remains hidden behind the scar that defines him. ',
    personality:
      'Calm and gentle with his friends and subordinates. Though when possessed by Obsius, he becomes ruthless and merciless. *NOTE: Obsius is a dark deity that occasionally takes control of Ender, amplifying his darker traits. VAs must be able to perform as Ender in his possesed state.*',
    imageUrls: [
      'assets/EnderPort.png',
      'assets/EnderPage1.png',
      'assets/EnderPage2.png',
      'assets/EnderPage3.png',
    ],
    voiceExamples: voiceEnder,
    voiceRef: "Tav 1 - Baldur's Gate 3 (Josh Wichard)",
  },
  {
    id: 5,
    name: 'Kenzi Akimoto',
    role: 'The Royal Rogue',
    bio: 'Kenzi was born into prestige, the daughter of an Pleading Council member and heir to a life most people could only dream of. But Kenzi’s determined to earn her place not by bloodline, but by skill and to fight for a world where no one’s born better than anyone else.',
    personality:
      'Energetic, bossy, and confident. Kenzi has a fiery attitude that keeps the group on their toes.',
    imageUrls: [
      'assets/KenziPort.png',
      'assets/KenziPage1.png',
      'assets/KenziPage2.png',
      'assets/KenziPage3.png',
    ],
    voiceExamples: voiceKenzi,
    voiceRef: 'Yuffie Kisaragi - Final Fantasy VII Remake (Suzie Yeung)',
  },
  {
    id: 6,
    name: 'Solomon Vex',
    role: 'The Flame Spirit',
    bio: 'Vex is a Tier 4 swordsman in Viveform who wields Spirignum, the flame spirit Augur that lets him breathe and control fire during battle. His sword, Zhomei, wrapped in bandages, is a trusted weapon whose origins are as mysterious as his own past.',
    personality:
      'Fiery, full of heart and fiercely loyal. Vex loves a good challenge and eats more than anyone else.',
    imageUrls: [
      'assets/VexPort.png',
      'assets/VexPage1.png',
      'assets/VexPage2.png',
      'assets/VexPage3.png',
    ],
    voiceExamples: voiceVex,
    voiceRef: 'Prompto - Final Fantasy XV (Robbie Daymond)',
  },
  {
    id: 7,
    name: 'Boca',
    role: "Vex's Pal",
    bio: "A red panda child who is Vex's closest companion. Despite his innocent look, Boca has a mischievous streak and a knack for getting into trouble, but his heart is always in the right place. He and Vex want to travel Viso to find out more about their past.",
    personality:
      'Innocent but mischievous, with a heart of gold. Extremely curious and driven to explore the world.',
    imageUrls: [
      'assets/BocaPort.png',
      'assets/BocaPage1.png',
      'assets/BocaPage2.png',
      'assets/BocaPage3.png',
    ],
    voiceExamples: voiceBoca,
    voiceRef: "Tails - Sonic the Hedgehog (Colleen O'Shaughnessey)",
  },
  {
    id: 8,
    name: 'Kaz Greenfield',
    role: 'The Gifted Soldier',
    bio: 'Kaz has spent his entire life preparing to serve Viveform. Born into a decorated military family, his upbringing was built on discipline, sacrifice, and the belief that glory is earned through unwavering loyalty. Every strike of his greatsword and every flawless command reflect years of training designed to shape him into the perfect soldier. Within Viveform’s ranks, Kaz’s reputation is unmatched, a rising star destined for leadership.',
    personality:
      'Disciplined, confident and eager to demonstrate his skills and prowess. A bit cocky at times, though he means well.',
    imageUrls: [
      'assets/KazPort.png',
      'assets/KazPage1.png',
      'assets/KazPage2.png',
      'assets/KazPage3.png',
    ],
    voiceExamples: voiceKaz,
    voiceRef: 'Rock Howard - Fatal Fury (Griffin Puatu)',
  },
  // {
  //   id: 9,
  //   name: 'Louisa De Luz',
  //   role: 'The Training Captain',
  //   bio: "A noblewoman and spymaster who navigates the treacherous courts of the kingdom. She uses wit and charm as her primary weapons, funding the heroes' journey for her own political gain.",
  //   personality:
  //     'Charismatic, manipulative, intelligent, always three steps ahead, her true motives are a mystery.',
  //   imageUrls: [
  //     'assets/LouisaPort.png',
  //     'assets/LouisaPage1.png',
  //     'assets/LouisaPage2.png',
  //     'assets/LouisaPage3.png',
  //   ],
  //   voiceExamples: voiceLouisa,
  //   voiceRef: 'Celica - Fire Emblem Warriors (Erica Lindbeck)',
  // },
];
