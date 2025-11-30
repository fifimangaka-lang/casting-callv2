import React from 'react';
import type { Character } from '../types';

interface CharacterCardProps {
  character: Character;
  onSelect: () => void;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({
  character,
  onSelect,
}) => {
  return (
    <div
      className="character-card relative bg-slate-800 rounded-lg overflow-hidden cursor-pointer group transform transition-transform duration-300 hover:-translate-y-2 shadow-lg"
      onClick={onSelect}
    >
      <img
        src={character.imageUrls[0]}
        alt={character.name}
        className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 group-hover:opacity-0"></div>
      <div className="absolute bottom-0 left-0 p-4">
        <h3 className="text-xl font-bold font-cinzel text-white">
          {character.name}
        </h3>
        <p className="text-[#E0F7FA] text-sm">{character.role}</p>
      </div>
    </div>
  );
};
