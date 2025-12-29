import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CharacterGrid } from './components/CharacterGrid';
import { ProjectSpecs } from './components/ProjectSpecs';
import { Footer } from './components/Footer';
import { CharacterModal } from './components/CharacterModal';
import { ApplyModal } from './components/ApplyModal';
import { CHARACTERS } from './constants';
import type { Character } from './types';
import { MusicPlayer } from './components/MusicPlayer';
import { EmailSignup } from './components/EmailSignup';
import { PronunciationSection } from './components/PronunciationSection';

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null
  );
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  const handleSelectCharacter = (character: Character) => {
    setSelectedCharacter(character);
  };

  const handleCloseModal = () => {
    setSelectedCharacter(null);
  };

  const handleOpenApplyModal = () => {
    setIsApplyModalOpen(true);
  };

  const handleCloseApplyModal = () => {
    setIsApplyModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-transparent text-gray-200 font-lato">
      <Header onApplyClick={handleOpenApplyModal} />
      <main>
        <Hero />
        <CharacterGrid
          characters={CHARACTERS}
          onSelectCharacter={handleSelectCharacter}
        />
        <ProjectSpecs onApplyClick={handleOpenApplyModal} />
        <PronunciationSection />
        <EmailSignup />
      </main>
      <Footer />
      {selectedCharacter && (
        <CharacterModal
          character={selectedCharacter}
          onClose={handleCloseModal}
        />
      )}
      {isApplyModalOpen && <ApplyModal onClose={handleCloseApplyModal} />}
      {/* <MusicPlayer /> */}
    </div>
  );
}

export default App;
