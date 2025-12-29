// import { GoogleGenAI } from "@google/genai";
// import type { Character } from '../types';
// import { MANGA_TITLE } from '../constants';

// const API_KEY = process.env.API_KEY;

// if (!API_KEY) {
//   throw new Error("API_KEY environment variable not set");
// }

// const ai = new GoogleGenAI({ apiKey: API_KEY });

// export async function generateAuditionLines(character: Character): Promise<string> {
//   const model = 'gemini-2.5-flash';

//   const prompt = `You are a casting director for a fantasy adventure manga titled "${MANGA_TITLE}".
// Generate 3 distinct and compelling audition lines for the character ${character.name}.

// Character Details:
// - Role: ${character.role}
// - Personality: ${character.personality}
// - Bio: ${character.bio}

// The lines should reflect their core personality, inner conflicts, or a key moment in their story.
// The lines should be suitable for a voice actor's audition.
// Return only the 3 lines, each on a new line. Do not include labels like "Line 1:", quotation marks, or any other formatting.`;

//   try {
//     const response = await ai.models.generateContent({
//       model: model,
//       contents: prompt,
//     });

//     return response.text.trim();
//   } catch (error) {
//     console.error("Error generating content from Gemini API:", error);
//     throw new Error("Failed to communicate with the AI model.");
//   }
// }
