import React from 'react';

interface IntroScreenProps {
  onStart: () => void;
}

const IntroScreen: React.FC<IntroScreenProps> = ({ onStart }) => {
  return (
    <div className="bg-gray-900/80 backdrop-blur-sm text-white p-8 rounded-xl shadow-2xl border-2 border-yellow-400 text-center animate-fade-in">
      <h1 className="font-seinfeld text-6xl md:text-7xl font-bold mb-4 text-yellow-400 tracking-wider">Seinfeld: An Interactive Episode</h1>
      <p className="text-lg md:text-xl mb-8 text-gray-300">
        Step into an interactive episode where you control the gang. Play as Jerry, George, Elaine, or Kramer in a web of interconnected, neurotic adventures.
      </p>
      <button 
        onClick={onStart}
        className="font-seinfeld bg-blue-600 hover:bg-yellow-400 hover:text-black text-white font-bold py-3 px-10 rounded-lg text-3xl transition-all transform hover:scale-105 duration-300 ease-in-out shadow-lg tracking-wide"
      >
        Choose a Character
      </button>
    </div>
  );
};

export default IntroScreen;