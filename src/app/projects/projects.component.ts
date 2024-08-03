import { Component } from '@angular/core';
import { Project } from '../_models/Project';
import { Title } from '@angular/platform-browser';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent,CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projectt:Project[]=[
    {
      name:'Portfolio Website',
      summary:'The Personal Portfolio Website is a web application designed to showcase my professional skills, projects, and education. The primary objective of this project is to provide a comprehensive platform where potential employers, collaborators, and peers can explore my work and learn more about my professional background.',
      projectLink:'https://github.com/bharath62819/portfolio',
      tags:['HTML','CSS','TypeScript','Bootstrap','Angular']
    },
]

  constructor(private titleService:Title){
    this.titleService.setTitle("Bharath's-Projects")
  }
}
