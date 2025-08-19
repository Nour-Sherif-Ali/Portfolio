import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  position: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

interface Education {
  degree: string;
  institution: string;
  period: string;
  gpa?: string;
  relevant?: string[];
}
@Component({
  selector: 'app-resume',
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {
   yearsOfExperience = 2;

  skillCategories = [
    {
      name: 'Frontend',
      skills: ['React', 'Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'SASS']
    },
    {
      name: 'Backend',
      skills: ['ASP.Core','Python','Flask', 'REST APIs',]
    },
    {
      name: 'Database',
      skills: [ 'PostgreSQL', 'MySQL', 'Firebase']
    },
    {
      name: 'DevOps & Tools',
      skills: ['Docker', 'Git']
    }
  ];

 experiences: Experience[] = [
  {
    position: 'Data Integration and API Intern',
    company: 'BVS',
    period: 'Jan 2025 - Present',
    description: 'Focused on backend API workflows, integration pipelines, and ensuring secure and consistent data exchange.',
    achievements: [
      'Explored advanced data integrity concepts and best practices for secure systems',
      'Validated and optimized APIs using Postman',
      'Built strong foundation in data governance and integration pipelines'
    ],
    technologies: ['Python', 'JavaScript', 'Postman']
  },
  {
    position: 'NLP and AI Intern',
    company: 'NajahNow',
    period: 'Jan 2025 - Present',
    description: 'Worked on AI-driven automation and conversational healthcare systems using NLP.',
    achievements: [
      'Developed a healthcare chatbot for real-time responses',
      'Applied machine learning to enhance chatbot performance',
      'Improved user experience with NLP-driven conversational interfaces'
    ],
    technologies: ['Python', 'NLP', 'Machine Learning']
  },
  {
    position: 'IT and Voice Systems Intern',
    company: 'Agricultural Bank of Egypt',
    period: 'Jul 2024 - Dec 2024',
    description: 'Worked with enterprise IT infrastructure and Cisco voice systems.',
    achievements: [
      'Managed Cisco voice accounts (provisioning & deactivation)',
      'Diagnosed and resolved voice system issues',
      'Enhanced operational efficiency of IT systems'
    ],
    technologies: ['Cisco', 'Networking', 'IT Infrastructure']
  }
];

education: Education[] = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'Modern Technology Institution (MTI)',
    period: 'Oct 2021 - May 2025',
    gpa: "2.8", 
    relevant: [
      'Data Structures',
      'Algorithms',
      'Database Systems',
      'Web Development',
      'Software Engineering'
    ]
  }
];


  // certifications = [
  //   {
  //     icon: '☁️',
  //     title: 'AWS Certified Solutions Architect',
  //     issuer: 'Amazon Web Services',
  //     date: '2023'
  //   },
  //   {
  //     icon: '⚛️',
  //     title: 'React Developer Certification',
  //     issuer: 'Meta',
  //     date: '2022'
  //   },
  //   {
  //     icon: '🏆',
  //     title: 'Google Cloud Professional Developer',
  //     issuer: 'Google Cloud',
  //     date: '2022'
  //   },
  //   {
  //     icon: '🎯',
  //     title: 'Scrum Master Certification',
  //     issuer: 'Scrum Alliance',
  //     date: '2021'
  //   }
  // ];

downloadResume(): void {
  // Make sure this path is correct relative to your deployed application
  const pdfUrl = 'assets/resume.pdf'; // Try with and without leading slash
  const fileName = 'YourName_Resume.pdf';
  
  // First verify the file exists at this URL
  fetch(pdfUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`File not found (HTTP ${response.status})`);
      }
      return response.blob();
    })
    .then(blob => {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      
      // Clean up
      setTimeout(() => {
        window.URL.revokeObjectURL(url);
        document.body.removeChild(link);
      }, 100);
    })
    .catch(error => {
      console.error('Download error:', error);
      alert(`Failed to download resume: ${error.message}`);
    });
}

  printResume(): void {
    window.print();
  }

}
