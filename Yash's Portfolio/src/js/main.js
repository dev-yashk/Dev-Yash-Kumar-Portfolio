import { initTheme } from './theme.js';
import { initAnimations } from './animations.js';
import { initNavigation } from './navigation.js';
import { initProjects } from './projects.js';

// Initialize all modules
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initAnimations();
  initNavigation();
  initProjects();
  lucide.createIcons();
});