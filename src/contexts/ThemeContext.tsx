
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface Theme {
  id: string;
  name: string;
  bg: string;
  category: 'simple' | 'gradient';
}

const themes: Theme[] = [
  // Simple Colors
  { id: 'dark', name: 'Dark', bg: 'bg-gradient-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#1a1a1a]', category: 'simple' },
  { id: 'light', name: 'Light', bg: 'bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300', category: 'simple' },
  { id: 'red', name: 'Red', bg: 'bg-gradient-to-br from-red-900 via-red-800 to-red-700', category: 'simple' },
  { id: 'blue', name: 'Blue', bg: 'bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700', category: 'simple' },
  { id: 'green', name: 'Green', bg: 'bg-gradient-to-br from-green-900 via-green-800 to-green-700', category: 'simple' },
  { id: 'purple', name: 'Purple', bg: 'bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700', category: 'simple' },
  { id: 'yellow', name: 'Yellow', bg: 'bg-gradient-to-br from-yellow-900 via-yellow-800 to-yellow-700', category: 'simple' },
  { id: 'indigo', name: 'Indigo', bg: 'bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-700', category: 'simple' },
  { id: 'pink', name: 'Pink', bg: 'bg-gradient-to-br from-pink-900 via-pink-800 to-pink-700', category: 'simple' },
  { id: 'teal', name: 'Teal', bg: 'bg-gradient-to-br from-teal-900 via-teal-800 to-teal-700', category: 'simple' },
  
  // Gradient Colors
  { id: 'sunset', name: 'Sunset', bg: 'bg-gradient-to-br from-orange-400 via-red-500 to-pink-500', category: 'gradient' },
  { id: 'ocean', name: 'Ocean', bg: 'bg-gradient-to-br from-blue-400 via-cyan-500 to-teal-500', category: 'gradient' },
  { id: 'purple-bliss', name: 'Purple Bliss', bg: 'bg-gradient-to-br from-purple-400 via-pink-400 to-red-400', category: 'gradient' },
  { id: 'forest', name: 'Forest', bg: 'bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600', category: 'gradient' },
  { id: 'cosmic', name: 'Cosmic', bg: 'bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900', category: 'gradient' },
  { id: 'aurora', name: 'Aurora', bg: 'bg-gradient-to-br from-green-300 via-blue-500 to-purple-600', category: 'gradient' },
  { id: 'fire', name: 'Fire', bg: 'bg-gradient-to-br from-red-600 via-orange-500 to-yellow-400', category: 'gradient' },
  { id: 'midnight', name: 'Midnight', bg: 'bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900', category: 'gradient' },
  { id: 'rainbow', name: 'Rainbow', bg: 'bg-gradient-to-br from-red-400 via-yellow-400 via-green-400 via-blue-400 to-purple-400', category: 'gradient' },
  { id: 'cyber', name: 'Cyber', bg: 'bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600', category: 'gradient' }
];

interface ThemeContextType {
  currentTheme: Theme;
  setTheme: (themeId: string) => void;
  themes: Theme[];
  simpleThemes: Theme[];
  gradientThemes: Theme[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(themes[0]);

  const setTheme = (themeId: string) => {
    const theme = themes.find(t => t.id === themeId);
    if (theme) {
      setCurrentTheme(theme);
      localStorage.setItem('preferred-theme', themeId);
    }
  };

  // Load saved theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('preferred-theme');
    if (savedTheme) {
      const theme = themes.find(t => t.id === savedTheme);
      if (theme) {
        setCurrentTheme(theme);
      }
    }
  }, []);

  const simpleThemes = themes.filter(theme => theme.category === 'simple');
  const gradientThemes = themes.filter(theme => theme.category === 'gradient');

  return (
    <ThemeContext.Provider value={{
      currentTheme,
      setTheme,
      themes,
      simpleThemes,
      gradientThemes
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
