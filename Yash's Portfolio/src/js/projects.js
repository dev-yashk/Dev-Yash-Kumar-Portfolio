// Project card interactions
export const initProjects = () => {
  const projects = document.querySelectorAll('.project-card');
  
  projects.forEach(project => {
    project.addEventListener('mouseenter', () => {
      project.querySelector('.project-overlay').style.opacity = '1';
    });
    
    project.addEventListener('mouseleave', () => {
      project.querySelector('.project-overlay').style.opacity = '0';
    });
  });
};