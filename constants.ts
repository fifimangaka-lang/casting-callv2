import type { Character } from './types';

export const MANGA_TITLE = 'Ye Olde Treehouse';

// IMPORTANT: Replace this with your actual Google Form embed URL.
// To get the embed URL, go to your Google Form, click "Send", go to the "<>" (Embed) tab, and copy the src from the iframe code.
export const GOOGLE_FORM_EMBED_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLScSLINyvmaTpTHY6ZpncWQg5Y85QBr2CHtIul5ZT9-0kXFk-A/viewform?embedded=true"';

export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/fifimangaka',
  youtube: 'https://youtube.com/@fifimangaka',
  instagram: 'https://instagram.com/fifimangaka',
  patreon: 'https://patreon.com/fifimangaka',
  readManga: 'https://yeoldetreehouse.com',
};

export interface PronunciationEntry {
  term: string;
  phonetic: string;
  category: 'name' | 'location' | 'term';
  audioUrl?: string;
}

export const GLOBAL_PRONUNCIATIONS: PronunciationEntry[] = [
  // NAMES
  {
    term: 'Rou Akei',
    phonetic: 'ROO Ahh-KAY',
    category: 'name',
    audioUrl: 'assets/RouAkei1.wav',
  },

  {
    term: 'Yoroua',
    phonetic: 'yo-ROU-UHH',
    category: 'name',
    audioUrl: 'assets/Yoroua_1.wav',
  },
  {
    term: 'Fig Noston',
    phonetic: 'FIG NAH-stun',
    category: 'name',
    audioUrl: 'assets/FigNoston_1.wav',
  },
  {
    term: 'Drendith Nosferi',
    phonetic: 'DREN-dith NOHS-FAIRY',
    category: 'name',
    audioUrl: 'assets/DrendithNosferi_1.wav',
  },
  {
    term: 'Ender Valen',
    phonetic: 'EN-der VAY-len',
    category: 'name',
    audioUrl: 'assets/EnderValen_1.wav',
  },
  {
    term: 'Kenzi Akimoto',
    phonetic: 'KEN-zee AH-kee-moh-toh',
    category: 'name',
    audioUrl: 'assets/KenziAkimoto_1.wav',
  },
  {
    term: 'Solomon Vex',
    phonetic: 'SAHL-oh-mun VEX',
    category: 'name',
    audioUrl: 'assets/SolomonVex_1.wav',
  },
  {
    term: 'Boca',
    phonetic: 'BOH-kah',
    category: 'name',
    audioUrl: 'assets/Boca_Name1.wav',
  },
  {
    term: 'Kaz Greenfield',
    phonetic: 'KAHZ GREEN-field',
    category: 'name',
    audioUrl: 'assets/KazGreenfield_1.wav',
  },
  {
    term: 'Koshi Siomus',
    phonetic: 'KOH-shee sigh-OH-mus',
    category: 'name',
    audioUrl: 'assets/KoshiSiomus_1.wav',
  },
  {
    term: 'Gammi',
    phonetic: 'GAM-mee',
    category: 'name',
    audioUrl: 'assets/Gammi_1.wav',
  },
  {
    term: 'Zazi',
    phonetic: 'ZAH-zee',
    category: 'name',
    audioUrl: 'assets/Zazi_1.wav',
  },

  // LOCATIONS
  {
    term: 'New Alta Izera',
    phonetic: 'NEW ALL-tah ee-ZEER-ah',
    category: 'location',
    audioUrl: 'assets/NewAltaIzera_1.wav',
  },
  {
    term: 'New Alta Dercha',
    phonetic: 'NEW ALL-tah DER-chah',
    category: 'location',
    audioUrl: 'assets/NewAltaDercha_1.wav',
  },
  {
    term: 'Glory Peak',
    phonetic: 'GLOR-ee PEAK',
    category: 'location',
    audioUrl: 'assets/GloryPeak_1.wav',
  },
  {
    term: 'Altamerian',
    phonetic: 'ALT-ah-MER-ee-an',
    category: 'location',
    audioUrl: 'assets/Altamerian_1.wav',
  },
  {
    term: 'Laetowood',
    phonetic: 'LAY-toh-WOOD',
    category: 'location',
    audioUrl: 'assets/Laetowood_1.wav',
  },
  {
    term: 'Viso',
    phonetic: 'Vee-so',
    category: 'location',
    audioUrl: 'assets/Viso_1.wav',
  },
  {
    term: 'New Colony Prima',
    phonetic: 'NEW COL-oh-nee PRY-mah',
    category: 'location',
    audioUrl: 'assets/NewColonyPrima_1.wav',
  },

  // TERMINOLOGY
  {
    term: 'Augur',
    phonetic: 'Ahh-guhr',
    category: 'term',
    audioUrl: 'assets/Augur_1.wav',
  },
  {
    term: 'Viveform',
    phonetic: 'VIH-VIH-form',
    category: 'term',
    audioUrl: 'assets/Viveform_1.wav',
  },
  {
    term: 'Teleregnum',
    phonetic: 'TEL-eh-REG-num',
    category: 'term',
    audioUrl: 'assets/Teleregnum_1.wav',
  },
  {
    term: 'Admavis',
    phonetic: 'AD-may-vis',
    category: 'term',
    audioUrl: 'assets/Admavis_1.wav',
  },
  {
    term: 'Spirignum',
    phonetic: 'SPIH-rihg-num',
    category: 'term',
    audioUrl: 'assets/Spirignum_1.wav',
  },
  {
    term: 'Perfissio',
    phonetic: 'per-Fee-See-OH',
    category: 'term',
    audioUrl: 'assets/Perfissio_1.wav',
  },
  {
    term: 'Eclose Fist',
    phonetic: 'I-CLOHS FIST',
    category: 'term',
    audioUrl: 'assets/EcloseFist_1.wav',
  },
  {
    term: 'Umbral Tithe',
    phonetic: 'UM-bral TYTH',
    category: 'term',
    audioUrl: 'assets/UmbralTithe_1.wav',
  },
  {
    term: 'VV Dercha',
    phonetic: 'Vee-Vee DER-chah',
    category: 'term',
    audioUrl: 'assets/VVDercha_1.wav',
  },
  {
    term: 'Kuahn',
    phonetic: 'KOO-ahn',
    category: 'term',
    audioUrl: 'assets/Kuahn_1.wav',
  },
  {
    term: 'Psy Sho',
    phonetic: 'SIGH-show',
    category: 'term',
    audioUrl: 'assets/PsySho_1.wav',
  },
  {
    term: 'Psyonic Prism',
    phonetic: 'SIGH-oh-nik PRIZ-um',
    category: 'term',
    audioUrl: 'assets/PsyonicPrism_1.wav',
  },
  {
    term: 'Pterosaur',
    phonetic: 'TER-oh-sore',
    category: 'term',
    audioUrl: 'assets/pterosaur_1.wav',
  },
  {
    term: 'Retorta Saltu',
    phonetic: 'REHT-ohr-tah SAL-too',
    category: 'term',
    audioUrl: 'assets/RetortaSaltu_1.wav',
  },
  {
    term: "Ta'Shofela",
    phonetic: 'TAH-SHOF-eh-lah',
    category: 'term',
    audioUrl: 'assets/TaShofela_1.wav',
  },
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

const voiceLuna = ['assets/Luna1.wav', 'assets/Luna2.wav', 'assets/Luna3.wav'];

export const CHARACTERS: Character[] = [
  {
    id: 1,
    name: 'Rou Akei',
    role: 'The Unlikely Captain',
    bio: 'Rou is the Captain of Viveform’s top protection squad, based in New Alta Izera, Glory Peak. She’s a bit unorthodox, often charging ahead before fully thinking things through, but that same impulsiveness is driven by passion, loyalty, and an unshakable sense of justice. After joining Viveform she met Commander Ender Valen, the first real “friend” she ever had. He promoted her to Captain when nearly the entire organization doubted her. That trust means everything to Rou, even if she struggles to show it.',
    personality:
      'Impulsive but heartfelt, she acts on instinct and emotion more than caution. Bright and energetic, with a sassy undertone. Rou has the power to see into the future with her Augur, Teleregnum. (23-27yo)',
    imageUrls: [
      'assets/RouPort.png',
      'assets/RouPage1.png',
      'assets/RouPage2.png',
      'assets/RouPage3.png',
    ],
    voiceExamples: voiceRou,
    voiceRef: 'Judy Hopps - Zootopia (Ginnifer Goodwin)',
    auditionLines: `Line 1: (Bright) "Captain Yoroua Akei. But you can call me Rou!" -Chapter 4

Line 2: (Cheeky, Playful) "It's free to use your brain, Solomon. If you fell off of Big Drop, we wouldn't be talking right now!" -Chapter 14

Line 3: (Determined, Fired up) "You won’t get past this Captain!! Teleregnum! Seer’s Razor! " -Chapter 20

Line 4: (Insecure, Concerned) "Why did you make me Captain of the New Alta Izera squad...when Kaz was right there? " -Chapter 16

Line 5: (Intense, Unsure) "Don’t you dare say that, soldier!! We’re only here because he trusts us to keep Glory Peak safe!!" -Chapter 23

OPTIONAL: (Flirty, Sarcastic) "You know, this would be kinda hot, if you weren’t such an asshole." -Chapter 26`,
  },
  {
    id: 2,
    name: 'Fig Noston',
    role: 'The Genius Geologist',
    bio: 'Fig Noston is the second-in-command of Viveform’s top protection squad for New Alta Izera, Glory Peak. She’s calm, thoughtful, brilliant and always seems to know what to do when things go sideways. But that all comes crashing down when a mysterious Sky Pirate digs up old debts, demanding payment for something Fig took from him. Threatening to unravel the life she’s fought to build.',
    personality:
      'Gentle, practical and focused under pressure. Fig is the stability that keeps the team together. Fig has the power to turn to diamond with her Augur, Admavis. (23-25yo)',
    imageUrls: [
      'assets/FigPort.png',
      'assets/FigPage1.png',
      'assets/FigPage2.png',
      'assets/FigPage3.png',
    ],
    voiceExamples: voiceFig,
    voiceRef: 'Elincia - Fire Emblem (Amanda Miller)',
    auditionLines: `Line 1: (Warm, Proud) "Look at you two, sounding like real Regulation agents! Commander Ender would be proud!" -Chapter 15

Line 2: (Determined, Fiery) "I can’t let her get away! Admavis, Eclose Fist!!" -Chapter 23

Line 3: (Sly, humorous) "Sky pirates don’t chase kiddos… So this is the safest group to travel with!" -Chapter 15

Line 4: (Heavy, reflective) "That Volarite I stole from Koshi Siomus... There's absolutely no way anyone can have it." -Chapter 22`,
  },
  {
    id: 3,
    name: 'Drendith Nosferi',
    role: 'The Dark Showman',
    bio: "Drendith Nosferi comes from the legendary Nosferi family, a famed circus dynasty in Glory Peak. It's suspected he wields a dangerous and outlawed magic to perform his circus shows, and was placed under surveillance by Viveform. Under the glitz of performance, Drendith is motivated by a deep desire to restore his family’s honor and seek revenge against Viveform for their role in their catastrophic downfall.",
    personality:
      'Flamboyant, showy and flirty. His peacock like exterior hides a deep darkness within. Drendith has the power to create powerful illusions with his Augur, Perfissio. British RP Accent. (30-35yo)',
    imageUrls: [
      'assets/DrendithPort.png',
      'assets/DrenPage1.png',
      'assets/DrenPage2.png',
      'assets/DrenPage3.png',
    ],
    voiceExamples: voiceDrendith,
    voiceRef: "Astarion - Baldur's Gate 3 (Neil Newbon)",
    auditionLines: `Line 1: (Ominous, Polite) "A warm welcome to Altamerian… on behalf of the Nosferi family." -Chapter 28

Line 2: (Maniacal, Passionate) "We will carve out the heart of the beast… in a fashion only a Nosferi could!!" -Chapter 24

Line 3: (Flamboyant, playful) "Darkest truths revealed!! Scandalous secrets exposed!! A Nosferi first! I can hardly contain myself!!" -Chapter 13

Line 4: (Worried, Frantic) "With the entrance of this repulsive and unplanned guest… I’ve lost control of my illusions!" -Chapter 20`,
  },
  {
    id: 4,
    name: 'Ender Valen',
    role: 'The Kingmaker',
    bio: 'Ender Valen leads Viveform’s military branch with unwavering discipline and a reputation for effectiveness that few dare question. Marked by the scar running down the left side of his face and body, Ender is as feared as he is respected, a figure known for his stoic presence and sharp command of any situation. He carries his own secrets, the largest of which remains hidden behind the scar that defines him. ',
    personality:
      'Calm and gentle with his friends and subordinates. Though when possessed by Obsius, he becomes ruthless and merciless. British RP Accent. (30-38 yo) *NOTE: Obsius is a dark deity that occasionally takes control of Ender, amplifying his darker traits. VAs must be able to perform as Ender in his possessed state.* ',
    imageUrls: [
      'assets/EnderPort.png',
      'assets/EnderPage1.png',
      'assets/EnderPage2.png',
      'assets/EnderPage3.png',
    ],
    voiceExamples: voiceEnder,
    voiceRef: "Tav 1 - Baldur's Gate 3 (Josh Wichard)",
    auditionLines: `Line 1: (In thought) "Sending your illusions through the Port Oak to evade us... you've always been clever, Drendith." -Chapter 16


Line 2: (Playful, humorous) "Oh! Hahaha! Y-yes, quite!! Made for people with iron grip and iron stress!" -Chapter 16

Line 3: (Warm, resolved) "I chose you...because...you're the only one I know bold enough to follow me into the abyss and back." -Chapter 16

Line 4: (Obsius, Breathy, Amused) " Ya caught me off guard! Feel special?! Umbral Tithe!" -Chapter 25

Line 5: (Obsius, Mocking, Sarcastic) "Unless... You have a powerful telepathic Augur I don't know about... Dо уоu… Kаz? That's sneaky!" -Chapter 16`,
  },
  {
    id: 5,
    name: 'Kenzi Akimoto',
    role: 'The Royal Rogue',
    bio: 'Kenzi was born into the prestigious race of "Ordained", the daughter of an Pleading Council member and heir to a life most people could only dream of. But Kenzi’s determined to earn her place not by bloodline, but by skill and to fight for a world where no one’s born better than anyone else.',
    personality:
      'Energetic, bossy, and confident. Kenzi has a fiery attitude that keeps the group on their toes. (15-16 yo)',
    imageUrls: [
      'assets/KenziPort.png',
      'assets/KenziPage1.png',
      'assets/KenziPage2.png',
      'assets/KenziPage3.png',
    ],
    voiceExamples: voiceKenzi,
    voiceRef: 'Yuffie Kisaragi - Final Fantasy VII Remake (Suzie Yeung)',
    auditionLines: `Line 1: (Casual, flippant) "My cuff? Pshh… I’d give it to you, but… I can’t take it off." -Chapter 26

Line 2: (Assertive, Determined) "And I don’t care how important Ordained are to Glory Peak. I’m here to stop you!!" -Chapter 2

Line 3: (Sarcastic, Nervous) "H-hey buggy! I’m not from here you know...You could uhh... Let me scootch on by and go home, yeah?" -Chapter 9

Line 4: (Sad, in thought) "I can't even go with them to fight the wasp thingies... Am I... A bad secret agent? " -Chapter 12`,
  },
  {
    id: 6,
    name: 'Solomon Vex',
    role: 'The Flame Spirit',
    bio: 'Vex is a Tier 4 swordsman in Viveform who wields Spirignum, the flame spirit Augur that lets him breathe and control fire during battle. Ten years ago, Vex woke up in the forests of Laetowood without any memory of who he was or where he came from. The only clues to his identity are a strange necklace he has always worn and a red panda cub named Boca.  His sword, Zhomei, wrapped in bandages, is a trusted weapon whose origins are as mysterious as his own past.',
    personality:
      'Fiery, full of heart and fiercely loyal. Vex loves a good challenge and eats more than anyone else. (23-27 yo)',
    imageUrls: [
      'assets/VexPort.png',
      'assets/VexPage1.png',
      'assets/VexPage2.png',
      'assets/VexPage3.png',
    ],
    voiceExamples: voiceVex,
    voiceRef: 'Prompto - Final Fantasy XV (Robbie Daymond)',
    auditionLines: `Line 1: (Confident, playful) "You three 'gotta get out more! There's more to Viso than big buildings and concrete." -Chapter 4 

Line 2: (Fired up) "Now my blood's boiling!!!! Spirignum! Hellfire X!!" -Chapter 14

Line 3: (Sarcastic, smug, humorous) "Worried about me? I'm more afraid of your thoughts about that sitar playing guy to be honest…" -Chapter 13

Line 4: (Soft, reflective, somber) "I…never told anyone this. But I don't remember anything about my past... Before this moment right here." -Chapter 14

OPTIONAL: (Exhasperated, humorous) "Rou is insane! The first thing she did when I met her, was punch me in the face!!!" -Chapter 12`,
  },
  {
    id: 7,
    name: 'Boca',
    role: "Vex's Pal",
    bio: "A red panda child who is Vex's closest companion. Despite his innocent look, Boca has a mischievous streak and a knack for getting into trouble, but his heart is always in the right place. He and Vex want to travel Viso to find out more about their past.",
    personality:
      'Innocent but mischievous, with a heart of gold. Extremely curious and driven to explore the world. (8-10 yo)',
    imageUrls: [
      'assets/BocaPort.png',
      'assets/BocaPage1.png',
      'assets/BocaPage2.png',
      'assets/BocaPage3.png',
    ],
    voiceExamples: voiceBoca,
    voiceRef: "Tails - Sonic the Hedgehog (Colleen O'Shaughnessey)",
    auditionLines: `Line 1: (Cute, Warm) "I’m Boca. Me and Vex are pals!" -Chapter 4

Line 2: (Determined) "He'll use this smoke to sneak attack! I’ll get rid of it!!" -Chapter 9

Line 3: (Exasperated) "I’ll get help Kenzi!!!" -Chapter 22

Line 4: (Innocent curiousity) "Are there peach squeezies in Glory Peak?" -Chapter 18`,
  },
  {
    id: 8,
    name: 'Kaz Greenfield',
    role: 'The Gifted Soldier',
    bio: 'Kaz has spent his entire life preparing to serve Viveform. Born into a decorated military family, his upbringing was built on discipline, sacrifice, and the belief that glory is earned through unwavering loyalty.  Within Viveform’s ranks, Kaz’s reputation is unmatched, a rising star destined for leadership. But he lost his chance, when Rou was promoted to Captain over him. Now, Kaz must navigate the complex emotions of rivalry, respect, and the desire to prove himself worthy of command.',
    personality:
      'Disciplined, confident and eager to demonstrate his skills and prowess. A bit cocky at times, though he means well. (20-25 yo)',
    imageUrls: [
      'assets/KazPort.png',
      'assets/KazPage1.png',
      'assets/KazPage2.png',
      'assets/KazPage3.png',
    ],
    voiceExamples: voiceKaz,
    voiceRef: 'Rock Howard - Fatal Fury (Griffin Puatu)',
    auditionLines: `Line 1: (Bright, determined) "Well look who it is! Long time no see, New Alta Izera Squad!" -Chapter 4

Line 2: (Intense Resolve) "I'm still...V-viveform's star soldier!...Victory Bird!!" -Chapter 27

Line 3: (Ominous, then humorous) "I see, well I should probably warn you then, before it's too late. I'm coming with you guys!" -Chapter 4

Line 4: (Furious, Exploding) "Grrr...Then fuck formalities!! Let me speak freely, Ender!!" -Chapter 16`,
  },
  //   {
  //     id: 9,
  //     name: 'Yi- Luna',
  //     role: 'The Oathkeeper',
  //     bio: "Yi-Luna is the Commander of the New Alta Dercha province of Glory Peak. He's responsible for navigating the ongoing domestic tensions with New Alta Izera. He's Ender's right hand guy and extremely loyal to his counterpart. Having been enlisted in Viveform's military branch since his teenage years, he's developed a reputation for his direct and sharp approach. Though once the clock hits 5pm, he hits the local pub.",
  //     personality:
  //       'Warm, composed.  A “cool uncle” with a soft spot for jokes and craft beer. (38-45 yo)',
  //     imageUrls: [
  //       'assets/Luna1.png',
  //       'assets/LunaPage1.png',
  //       'assets/LunaPage2.png',
  //     ],
  //     voiceExamples: voiceLuna,
  //     voiceRef: 'Rude - Final Fantasy VII Remake (William C. Stephens)',
  //     auditionLines: `Line 1: (Stern, Sarcastic) "Now, we're going on a little field trip. You wanted to be a superhero? Well, your wish has been granted." -Chapter 2

  // Line 2: (Stern, Precise) "Understood, we will keep things stable in New Alta Dercha, Ender." -Chapter 3

  // Line 3: (Exploding, Comedy Gag) "I said stop moving you little twerp!!" -Chapter 3`,
  //   },
  //   {
  //     id: 10,
  //     name: 'Louisa De Luz',
  //     role: 'The Training Captain',
  //     bio: "Louisa is the dedicated and newly promoted training captain of Viveform's New Colony Prima base. Though most of the trainees tower over her, she enforces Viveform's strict rules with a stern fist. She even enforces rules no one (not even Ender) knows exists. 'Ensuring soldiers follow our carefully crafted rules is my passion!', she says. Louisa must be fun at parties.",
  //     personality:
  //       'Spunky, orderly and gentle. Unless you break a rule, that is.',
  //     imageUrls: [
  //       'assets/LouisaPort.png',
  //       'assets/LouisaPage1.png',
  //       'assets/LouisaPage2.png',
  //       'assets/LouisaPage3.png',
  //     ],
  //     voiceExamples: voiceLouisa,
  //     voiceRef: 'Celica - Fire Emblem Warriors (Erica Lindbeck)',
  //     auditionLines: `Line 1: (Bossy , Sharp) "Kaz Greenfield! You will now be ticketed for reciting mission codes! You know better!" -Chapter 4

  //   Line 2: (With Resolve) "So fight your hearts out! Show them what the great defenders of Glory Peak can do!" -Chapter 5

  //   Line 3: (Shocked, High-Pitched) "Oh my goodness!! How has he managed to infiltrate us?!" -Chapter 6

  //   Line 4: (Serious, Reflective) "Yes... Altamerian. The place our entire country has tried to put behind us." -Chapter 4`,
  //   },
  //   {
  //     id: 11,
  //     name: 'Elizabeth Cod',
  //     role: 'The Nosferi Pop Star Diva',
  //     bio: 'A famous pop idol in Glory Peak who traded her safe glitzy life for the macabre glamour of the Nosferi Circus. Her cute image and bubbly voice draws in fans by the thousands, but behind the scenes, she controls the Nosferi Circuses finances with the ruthlessness of a mob boss. Every one of the Nosferi troupe tries to get in good with her to get a sweet bonus (even Drendith!).',
  //     personality:
  //       "Glittering sparkly diva when the camera's on her. Stone-cold crime boss when it's time to talk numbers. British RP Accent. (22-25 yo)",
  //     imageUrls: [
  //       'assets/lizaport.png',
  //       'assets/LizPage1.png',
  //       'assets/LizPage2.png',
  //     ],
  //     voiceExamples: voiceLouisa,
  //     voiceRef: 'Celica - Fire Emblem Warriors (Erica Lindbeck)',
  //     auditionLines: `Line 1: (Cute, Bratty) "A gang?! We're a dazzling people centric circus operation. Thank you!" -Chapter 24

  //   Line 2: (Cheeky, Playful) "So tell me boys...who did the most to advance our little Laetowood scheme, hmm?" -Chapter 24

  //   Line 3: (Bubbly, Bright) "Another win for the ladies of the Nosferi troupe!" -Chapter 24
  //   `,
  //   },
];
