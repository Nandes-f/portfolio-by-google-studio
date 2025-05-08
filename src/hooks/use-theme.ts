// src/hooks/use-theme.ts
"use client";

import { useState, useEffect, useCallback } from 'react';

type Theme = 'light' | 'dark';

export function useTheme(defaultTheme: Theme = 'dark') {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === 'undefined') {
      return defaultTheme;
    }
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    return storedTheme || defaultTheme;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const root = window.document.documentElement;
      root.classList.remove(theme === 'dark' ? 'light' : 'dark');
      root.classList.add(theme);
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
  }, []);
  
  // Ensure theme is initialized on client
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const initialTheme = localStorage.getItem('theme') as Theme | null;
      if (initialTheme) {
        setThemeState(initialTheme);
      } else {
         // Check system preference if no theme is stored
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setThemeState(prefersDark ? 'dark' : 'light');
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return { theme, setTheme };
}
