import React, { useState, useEffect } from 'react';
import IntroScreen from './components/IntroScreen';
import CharacterSelectionScreen from './components/CharacterSelectionScreen';
import GameScreen from './components/GameScreen';
import EndScreen from './components/EndScreen';
import { gameData } from './gameData';
import { Character, Scene, Choice } from './types';
import { GoogleGenAI } from "@google/genai";

const App: React.FC = () => {
  type GameState = 'intro' | 'character_selection' | 'playing' | 'end';

  const [gameState, setGameState] = useState<GameState>('intro');
  const [character, setCharacter] = useState<Character | null>(null);
  const [currentScene, setCurrentScene] = useState<Scene | null>(null);
  const [inventory, setInventory] = useState<string[]>([]);
  const [endMessage, setEndMessage] = useState('');
  const [endStatus, setEndStatus] = useState<'won' | 'lost'>('lost');
  const [girlfriendName, setGirlfriendName] = useState('Patty'); 
  const [isLoading, setIsLoading] = useState(false);

  const defaultCompletionStatus: Record<Character, boolean> = {
    Jerry: false,
    George: false,
    Elaine: false,
    Kramer: false,
    Newman: false,
  };

  const [completionStatus, setCompletionStatus] = useState<Record<Character, boolean>>(defaultCompletionStatus);

  useEffect(() => {
    try {
      const savedStatus = localStorage.getItem('seinfeldGameCompletion');
      if (savedStatus) {
        // Safely merge saved status with default to handle new characters
        setCompletionStatus({ ...defaultCompletionStatus, ...JSON.parse(savedStatus) });
      }
    } catch (error) {
      console.error("Failed to load completion status from localStorage", error);
    }
  }, []);

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });
  
  const generateGirlfriendName = async () => {
      setIsLoading(true);
      try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: 'Generate a plausible, slightly funny, one-word woman\'s name from the 90s for a Seinfeld episode. Just the name, nothing else.',
        });
        const name = response.text.trim();
        if (name && name.length > 1 && name.length < 15 && !name.includes(' ')) {
          setGirlfriendName(name);
        } else {
            setGirlfriendName('Mulva'); 
        }
      } catch (error) {
        console.error("Error generating girlfriend name:", error);
        setGirlfriendName('Dolores');
      } finally {
        setIsLoading(false);
      }
  };

  const handleStart = () => {
    setGameState('character_selection');
  };

  const handleCharacterSelect = (selectedCharacter: Character) => {
    setCharacter(selectedCharacter);
    let startSceneKey: string;

    if (selectedCharacter === 'George') {
      const georgeStories = ['george_start_architect', 'george_start_bahasian'];
      startSceneKey = georgeStories[Math.floor(Math.random() * georgeStories.length)];
    } else {
      startSceneKey = `${selectedCharacter.toLowerCase()}_start`;
    }

    setCurrentScene(gameData[startSceneKey]);
    setGameState('playing');
    if (selectedCharacter === 'Jerry' || selectedCharacter === 'Newman') {
      generateGirlfriendName();
    }
  };

  const handleChoice = (choice: Choice) => {
    if (choice.givesItem) {
      setInventory(prev => [...prev, choice.givesItem!]);
    }
    
    let nextSceneKey = choice.nextScene;
    let nextScene = gameData[nextSceneKey];

    // Handle random scene branching if the next scene is a "hub"
    if (nextScene && nextScene.choices.length > 1 && nextScene.choices.every(c => c.text === "")) {
        const randomChoice = nextScene.choices[Math.floor(Math.random() * nextScene.choices.length)];
        nextSceneKey = randomChoice.nextScene;
        nextScene = gameData[nextSceneKey];
    }
    
    if (nextScene.ending) {
      setEndMessage(nextScene.text);
      setEndStatus(nextScene.ending);
      setGameState('end');

      if (nextScene.ending === 'won' && character) {
        const newStatus = { ...completionStatus, [character]: true };
        setCompletionStatus(newStatus);
        try {
          localStorage.setItem('seinfeldGameCompletion', JSON.stringify(newStatus));
        } catch (error) {
          console.error("Failed to save completion status to localStorage", error);
        }
      }

    } else {
      setCurrentScene(nextScene);
    }
  };

  const handleRestart = () => {
    setGameState('intro');
    setCharacter(null);
    setCurrentScene(null);
    setInventory([]);
    setEndMessage('');
  };

  const renderContent = () => {
    if (isLoading) {
        return (
            <div className="bg-gray-900/80 backdrop-blur-sm text-white p-8 rounded-xl shadow-2xl border-2 border-yellow-400 text-center">
                <h2 className="font-seinfeld text-4xl text-yellow-400 animate-pulse">Loading... Yadda Yadda Yadda...</h2>
            </div>
        )
    }
    switch (gameState) {
      case 'intro':
        return <IntroScreen onStart={handleStart} />;
      case 'character_selection':
        return <CharacterSelectionScreen onCharacterSelect={handleCharacterSelect} completionStatus={completionStatus} />;
      case 'playing':
        if (currentScene && character) {
          return <GameScreen scene={currentScene} onChoice={handleChoice} inventory={inventory} girlfriendName={girlfriendName} />;
        }
        return null;
      case 'end':
        return <EndScreen message={endMessage} onRestart={handleRestart} status={endStatus} girlfriendName={girlfriendName} />;
      default:
        return null;
    }
  };

  return (
    <div 
      className="bg-seinfeld min-h-screen bg-cover bg-center bg-fixed flex items-center justify-center p-4 font-sans"
    >
      <div className="w-full max-w-3xl mx-auto">
        {renderContent()}
      </div>
    </div>
  );
};

export default App;