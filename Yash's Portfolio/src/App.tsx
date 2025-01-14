import React from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import SkillBadge from './components/SkillBadge';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-purple-900 text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/2 space-y-8">
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Hi, I'm John Doe
            </h1>
            <p className="text-xl text-gray-300">
              Full Stack Developer crafting beautiful and functional web experiences
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 hover:text-purple-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="p-2 hover:text-purple-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="p-2 hover:text-purple-400 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            {/* Space for Spline 3D Model */}
            <div className="h-[600px]"></div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-12">Skills & Technologies</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <SkillBadge name="React" />
          <SkillBadge name="TypeScript" />
          <SkillBadge name="Node.js" />
          <SkillBadge name="Python" />
          <SkillBadge name="AWS" />
          <SkillBadge name="Docker" />
          <SkillBadge name="GraphQL" />
          <SkillBadge name="PostgreSQL" />
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectCard
            title="E-Commerce Platform"
            description="A full-stack e-commerce solution built with React, Node.js, and PostgreSQL"
            image="https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            link="#"
          />
          <ProjectCard
            title="AI Chat Application"
            description="Real-time chat application with AI-powered responses"
            image="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            link="#"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-12">Get In Touch</h2>
        <div className="max-w-2xl mx-auto">
          <p className="text-gray-300 mb-8 text-center">
            I'm currently open for freelance opportunities and interesting projects.
            Feel free to reach out!
          </p>
          <div className="flex justify-center">
            <a
              href="mailto:contact@example.com"
              className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-full transition-colors inline-flex items-center space-x-2"
            >
              <Mail size={20} />
              <span>Contact Me</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;