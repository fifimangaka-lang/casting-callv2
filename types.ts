export interface Character {
  id: number;
  name: string;
  role: string;
  bio: string;
  personality: string;
  imageUrls: string[];
  voiceExamples: string[];
  auditionLines: string; // Hard-coded unique lines for each character
  voiceRef?: string;
  pronunciations?: {
    term: string;
    phonetic?: string;
    category: 'name' | 'location' | 'term';
  }[];
}
