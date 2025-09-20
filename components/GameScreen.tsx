import React, { useState, useEffect } from 'react';
import { Scene, Choice } from '../types';

interface GameScreenProps {
  scene: Scene;
  onChoice: (choice: Choice) => void;
  inventory: string[];
  girlfriendName: string;
}

const useTypewriter = (text: string, speed = 30) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    setDisplayedText('');
    setIsTyping(true);
    let i = 0;
    const typingInterval = setInterval(() => {
      i += 1;
      setDisplayedText(text.slice(0, i));

      if (i >= text.length) {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [text, speed]);

  return { displayedText, isTyping };
};

const GameScreen: React.FC<GameScreenProps> = ({ scene, onChoice, inventory, girlfriendName }) => {
  const processedText = scene.text.replace(/{{girlfriendName}}/g, girlfriendName);
  const { displayedText, isTyping } = useTypewriter(processedText);

  const availableChoices = scene.choices.filter(choice => {
    return !choice.requiresItem || inventory.includes(choice.requiresItem);
  });

  return (
    <div className="bg-gray-900/80 backdrop-blur-sm text-white p-8 rounded-xl shadow-2xl border-2 border-gray-700 animate-fade-in transition-all duration-500">
      {inventory.length > 0 && (
        <div className="mb-6 p-3 bg-blue-900/30 rounded-lg border-2 border-blue-500">
          <h3 className="font-seinfeld text-xl text-yellow-400 mb-2 tracking-wider">Inventory:</h3>
          <ul className="list-disc list-inside text-gray-300">
            {inventory.map(item => <li key={item} className="animate-fade-in">{item}</li>)}
          </ul>
        </div>
      )}
      <p className={`text-lg md:text-xl mb-8 leading-relaxed text-gray-200 min-h-[100px] ${isTyping ? 'typewriter-caret' : ''}`}>
        {displayedText}
      </p>
      <div className="flex flex-col space-y-4">
        {!isTyping && availableChoices.map((choice, index) => (
          <button 
            key={index} 
            onClick={() => onChoice(choice)}
            className="w-full bg-gray-700/80 hover:bg-yellow-400 hover:text-black text-white font-semibold py-3 px-4 rounded-lg text-left transition-all duration-300 ease-in-out transform hover:translate-x-2 shadow-md border border-gray-600 flex items-center group animate-fade-in"
            style={{ animationDelay: `${index * 100}ms`}}
          >
            <span className="text-yellow-400 mr-3 transition-all group-hover:text-blue-600">&gt;</span>
            <span>{choice.text.replace(/{{girlfriendName}}/g, girlfriendName)}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default GameScreen;