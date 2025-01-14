// Theme management and dark mode functionality
export const initTheme = () => {
  const root = document.documentElement;
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  const setTheme = (isDark) => {
    root.style.setProperty('--color-background', isDark ? '#000000' : '#ffffff');
    root.style.setProperty('--gradient-start', isDark ? '#000000' : '#f3e8ff');
    root.style.setProperty('--gradient-end', isDark ? '#6b21a8' : '#9333ea');
  };

  setTheme(prefersDark);
};