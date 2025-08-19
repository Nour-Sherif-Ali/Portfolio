import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit 
{
  features = [
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Creating beautiful, intuitive user interfaces that provide exceptional user experiences.'
    },
    {
      icon: '💻',
      title: 'Frontend Development',
      description: 'Building responsive, fast, and modern web applications using the latest technologies.'
    },
    {
      icon: '⚡',
      title: 'Backend Development',
      description: 'Developing robust server-side applications and APIs that scale with your needs.'
    },
    {
      icon: '📱',
      title: 'Mobile-First',
      description: 'Ensuring your application works perfectly on all devices, from mobile to desktop.'
    }
  ];

  ngOnInit() {
    // Add any initialization logic here
  }

}
