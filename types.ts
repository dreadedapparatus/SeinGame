export interface Choice {
  text: string;
  nextScene: string;
  requiresItem?: string;
  givesItem?: string;
}

export interface Scene {
  text: string;
  choices: Choice[];
  ending?: 'won' | 'lost';
}

export interface GameData {
  [key: string]: Scene;
}

export type Character = 'Jerry' | 'George' | 'Elaine' | 'Kramer' | 'Newman';