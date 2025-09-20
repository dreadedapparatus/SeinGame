import React from 'react';
import { Character } from '../types';

interface CharacterSelectionScreenProps {
  onCharacterSelect: (character: Character) => void;
  completionStatus: Record<Character, boolean>;
}

const characters: { name: Character; description: string }[] = [
  { name: 'Jerry', description: "The master of observation, navigating the minutiae of daily life and relationships." },
  { name: 'George', description: "An architect of his own demise, tangled in a web of lies and social faux pas." },
  { name: 'Elaine', description: "Witty and cynical, battling workplace absurdity and a string of bad dates." },
  { name: 'Kramer', description: "A whirlwind of half-baked schemes and physical comedy, living life on his own terms." },
];

const newmanCharacter: { name: Character; description: string } = {
  name: 'Newman',
  description: "The malevolent mailman and Jerry's nemesis. Your goal: observe, plot, and finally get the dirt on Seinfeld."
};

const CharacterSelectionScreen: React.FC<CharacterSelectionScreenProps> = ({ onCharacterSelect, completionStatus }) => {
  const allFourCompleted = completionStatus.Jerry && completionStatus.George && completionStatus.Elaine && completionStatus.Kramer;

  return (
    <div className="bg-gray-900/80 backdrop-blur-sm text-white p-8 rounded-xl shadow-2xl border-2 border-yellow-400 text-center animate-fade-in">
      <h2 className="font-seinfeld text-5xl font-bold mb-6 text-yellow-400 tracking-wider">Choose Your Character</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {characters.map((char, index) => {
          const isCompleted = completionStatus[char.name];
          return (
            <div 
              key={char.name}
              onClick={() => onCharacterSelect(char.name)}
              className={`bg-gray-800/70 p-6 rounded-lg border-2 hover:bg-gray-700 cursor-pointer transition-all duration-300 transform hover:-translate-y-1 animate-fade-in ${isCompleted ? 'border-yellow-400' : 'border-gray-700 hover:border-yellow-400'}`}
              style={{ animationDelay: `${index * 150}ms`}}
            >
              <h3 className="font-seinfeld text-3xl text-blue-400 mb-2 flex items-center justify-center gap-2">
                {char.name}
                {isCompleted && <span className="text-yellow-400 text-2xl">★</span>}
              </h3>
              <p className="text-gray-300">{char.description}</p>
            </div>
          )
        })}
      </div>

      {allFourCompleted && (
        <div className="mt-8 pt-6 border-t-2 border-dashed border-red-500 animate-fade-in">
            <h2 className="font-seinfeld text-4xl font-bold mb-4 text-red-500 tracking-wider">Secret Character Unlocked!</h2>
             <div 
              onClick={() => onCharacterSelect(newmanCharacter.name)}
              className={`bg-red-900/70 p-6 rounded-lg border-2 hover:bg-red-800 cursor-pointer transition-all duration-300 transform hover:-translate-y-1 ${completionStatus.Newman ? 'border-yellow-400' : 'border-red-500 hover:border-yellow-400'}`}
            >
              <h3 className="font-seinfeld text-3xl text-yellow-300 mb-2 flex items-center justify-center gap-2">
                {newmanCharacter.name}
                {completionStatus.Newman && <span className="text-yellow-400 text-2xl">★</span>}
              </h3>
              <p className="text-gray-300">{newmanCharacter.description}</p>
            </div>
        </div>
      )}

    </div>
  );
};

export default CharacterSelectionScreen;