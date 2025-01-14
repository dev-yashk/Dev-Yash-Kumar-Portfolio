import { initAnimations } from './modules/animations.js';
import { initNavigation } from './modules/navigation.js';
import { initImageLoader } from './modules/imageLoader.js';

document.addEventListener('DOMContentLoaded', () => {
  initAnimations();
  initNavigation();
  initImageLoader();
});