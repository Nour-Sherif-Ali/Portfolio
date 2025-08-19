import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: string;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}
@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
   overviewStats = [
    { icon: '💻', number: '3', label: 'Technologies' },
    { icon: '🚀', number: '2+', label: 'Years Experience' },
    { icon: '📚', number: '19+', label: 'Certifications' },
    { icon: '🎯', number: '15+', label: 'Projects Completed' }
  ];

  skillCategories: SkillCategory[] = [
    {
      name: 'Frontend Development',
      skills: [
        { name: 'HTML/CSS', level: 95, category: 'frontend', icon: '🎨' },
        { name: 'JavaScript', level: 90, category: 'frontend', icon: '⚡' },
        { name: 'TypeScript', level: 88, category: 'frontend', icon: '📘' },
        { name: 'React', level: 80, category: 'frontend', icon: '⚛️' },
        { name: 'Angular', level: 89, category: 'frontend', icon: '🅰️' },
      ]
    },
    {
      name: 'Backend Development',
      skills: [
        { name: 'Python - Flask', level: 80, category: 'backend', icon: '🐍' },
        { name: 'ASP.Core', level: 85, category: 'backend', icon: '⚙️' },
        { name: 'REST APIs', level: 90, category: 'backend', icon: '🔗' },
        { name: 'MongoDB', level: 82, category: 'backend', icon: '🍃' }
      ]
    },
    {
      name: 'Tools & Technologies',
      skills: [
        { name: 'Git/GitHub', level: 92, category: 'tools', icon: '📋' },
        { name: 'Docker', level: 50, category: 'tools', icon: '🐳' },
        { name: 'Figma', level: 75, category: 'tools', icon: '🎨' }
      ]
    }
  ];

  // certifications = [
  //   {
  //     icon: '🏆',
  //     title: 'AWS Certified Solutions Architect',
  //     issuer: 'Amazon Web Services',
  //     date: '2023'
  //   },
  //   {
  //     icon: '📜',
  //     title: 'Google Cloud Professional',
  //     issuer: 'Google Cloud',
  //     date: '2023'
  //   },
  //   {
  //     icon: '🎯',
  //     title: 'React Developer Certification',
  //     issuer: 'Meta',
  //     date: '2022'
  //   },
  //   {
  //     icon: '💻',
  //     title: 'Full Stack Web Development',
  //     issuer: 'freeCodeCamp',
  //     date: '2022'
  //   }
  // ];

  getSkillLevel(level: number): string {
    if (level >= 90) return 'expert';
    if (level >= 80) return 'advanced';
    if (level >= 70) return 'intermediate';
    return 'beginner';
  }

}
