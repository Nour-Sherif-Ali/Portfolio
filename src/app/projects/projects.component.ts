import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  category: string;
  featured: boolean;
}
@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
   activeFilter = 'all';

  projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-featured online shopping platform with payment integration',
      fullDescription: 'A comprehensive e-commerce solution built with modern web technologies, featuring user authentication, product catalog, shopping cart, payment processing, and admin dashboard. Implements responsive design and optimal performance.',
      technologies: ['Angular', 'Typescript', 'MongoDB', 'Html', 'Sass'],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      demoUrl: 'https://www.linkedin.com/posts/nour-sherif-nsa_e-commerce-website-project-built-with-activity-7359552465488199682-FtHi?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD_Y3XIBN725ztiwNBV1sPRGBcpIQaA1CDA',
      githubUrl: 'https://github.com/Nour-Sherif-Ali/E-Commerce-Project.git',
      category: 'web',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management with real-time updates',
      fullDescription: 'A powerful task management application that enables teams to collaborate effectively with real-time updates, file sharing, progress tracking, and intuitive project organization features.',
      technologies: ['Angular', 'TypeScript', 'Sass', 'HTML'],
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/username/project',
      category: 'web',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Mobile App',
      description: ' weather app with location services',
      fullDescription: 'A beautiful weather application for mobile devices featuring accurate weather forecasts, location-based services, interactive maps, and personalized weather alerts.',
      technologies: ['Java Script', 'Css', 'HTML','API Integration'],
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      demoUrl: 'https://www.linkedin.com/posts/nour-sherif-nsa_task-7-completed-real-time-weather-activity-7357078823978377218-vrS5?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD_Y3XIBN725ztiwNBV1sPRGBcpIQaA1CDA',
      githubUrl: 'https://github.com/Nour-Sherif-Ali/weather-site.git',
      category: 'Web',
      featured: false
    },
    {
      id: 4,
      title: 'Restaurant API',
      description: 'RESTful API for restaurant management system',
      fullDescription: 'A robust RESTful API designed for restaurant management, handling menu items, orders, customer data, and inventory management with comprehensive documentation.',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      githubUrl: 'https://github.com/username/project',
      category: 'api',
      featured: false
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'Modern portfolio website with animations',
      fullDescription: 'A sleek and modern portfolio website showcasing projects and skills with smooth animations, responsive design, and optimal performance across all devices.',
      technologies: ['Html', 'CSS', 'Java Script', 'Netlify'],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/username/project',
      category: 'web',
      featured: false
    },
    
  ];

  get featuredProjects(): Project[] {
    return this.projects.filter(project => project.featured);
  }

  get filteredProjects(): Project[] {
    if (this.activeFilter === 'all') {
      return this.projects;
    }
    return this.projects.filter(project => project.category === this.activeFilter);
  }

  setFilter(filter: string): void {
    this.activeFilter = filter;
  }

}
