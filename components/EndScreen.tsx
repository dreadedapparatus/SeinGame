import React from 'react';

interface EndScreenProps {
  message: string;
  onRestart: () => void;
  status: 'won' | 'lost';
  girlfriendName: string;
}

const EndScreen: React.FC<EndScreenProps> = ({ message, onRestart, status, girlfriendName }) => {
  const isWinner = status === 'won';
  const title = isWinner ? "Master of Your Domain!" : "No Soup For You!";
  const titleColor = isWinner ? "text-yellow-400" : "text-red-500";
  const borderColor = isWinner ? "border-yellow-400" : "border-red-500";

  const processedMessage = message.replace(/{{girlfriendName}}/g, girlfriendName);

  return (
    <div className={`bg-gray-900/80 backdrop-blur-sm text-white p-8 rounded-xl shadow-2xl border-2 ${borderColor} text-center animate-fade-in`}>
      <h2 className={`font-seinfeld text-5xl font-bold mb-4 tracking-wider ${titleColor}`}>{title}</h2>
      <p className="text-lg md:text-xl mb-8 text-gray-300">
        {processedMessage}
      </p>
      <button 
        onClick={onRestart}
        className="font-seinfeld bg-blue-600 hover:bg-yellow-400 hover:text-black text-white font-bold py-3 px-10 rounded-lg text-3xl transition-all transform hover:scale-105 duration-300 ease-in-out shadow-lg tracking-wide"
      >
        Play Again?
      </button>
    </div>
  );
};

export default EndScreen;
