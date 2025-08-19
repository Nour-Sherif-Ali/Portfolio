import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
   imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
   yearsOfExperience = 2;

  values = [
    {
      icon: '🎯',
      title: 'Quality First',
      description: 'I believe in writing clean, maintainable code that stands the test of time.'
    },
    {
      icon: '🚀',
      title: 'Innovation',
      description: 'Always exploring new technologies and approaches to solve problems better.'
    },
    {
      icon: '🤝',
      title: 'Collaboration',
      description: 'Great products are built by great teams working together towards a common goal.'
    },
    {
      icon: '📚',
      title: 'Continuous Learning',
      description: 'The tech world evolves rapidly, and I evolve with it through constant learning.'
    }
  ];

  timeline = [
  {
    year: '2025',
    title: 'Computer Science Graduate',
    description: 'Graduated from the Faculty of Computer Science, marking the completion of my academic journey.'
  },
  {
    year: '2024',
    title: 'Full Stack Developer Journey',
    description: 'Decided to shift into full-stack development and successfully built multiple projects using modern technologies.'
  },
  {
    year: '2023',
    title: 'Exploring Data Analysis',
    description: 'Expanded my skills by learning about data analysis and exploring tools and techniques in the field.'
  },
  {
    year: '2022',
    title: 'Introduction to Programming',
    description: 'Began learning programming fundamentals and building the foundation of my software development skills.'
  }
];


  interests = [
    { icon: '📚', name: 'Reading Tech Blogs' },
    { icon: '🎨', name: 'Designing UI/UX' },
    { icon: '📸', name: 'Photography' },
    { icon: '🎮', name: 'Gaming' },
    { icon: '✈️', name: 'Traveling' },
    { icon: '🎵', name: 'Music' },
    { icon: '💻', name: 'Coding Challenges' },
    
    
  ];

}
