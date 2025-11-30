import React from 'react';
import { CharacterCard } from './CharacterCard';
import type { Character } from '../types';

interface CharacterGridProps {
  characters: Character[];
  onSelectCharacter: (character: Character) => void;
}

export const CharacterGrid: React.FC<CharacterGridProps> = ({ characters, onSelectCharacter }) => {
  return (
    <section id="characters" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-cinzel text-center mb-12 text-[#0E5B6D]">Meet the Characters</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {characters.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              onSelect={() => onSelectCharacter(character)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
