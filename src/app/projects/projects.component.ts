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
      projectLink:'https://bharathportfolio666.netlify.app/',
      codeLink:'https://github.com/bharath62819/portfolio',
      tags:['HTML','CSS','Bootstrap','TypeScript','Angular']
    },
    {
      name:'Weather App',
      summary:"Stay updated with our easy-to-use weather app. Just enter your city name to get real-time weather updates and forecasts using reliable weather APIs. The app also fetches relevant images of your city from Google, giving you a great visual experience. Whether you're planning your day or dreaming of your next trip, our app makes checking the weather fun and informative!",
      projectLink:'https://drive.google.com/file/d/145udLLZLjv-_W1cYxRRJ6DP2jGWotMx8/view?usp=drive_link',
      codeLink:'https://github.com/bharath62819/weather-app',
      tags:['HTML','CSS','Bootstrap','Django','Python']
    },
    {
      name:'To Do App',
      summary:"Stay organized with our intuitive to-do app! Designed for easy task management, the app allows you to create, read, update, and delete tasks effortlessly. Whether you’re planning your day or managing projects, our app helps you keep track of what needs to be done. With a user-friendly interface, you can prioritize tasks and stay focused on what matters most.",
      projectLink:'https://drive.google.com/file/d/1_CTlnZgCloPxif0ZO0ccCoV6FUfgrqYW/view?usp=drive_link',
      codeLink:'https://github.com/bharath62819/todo-app',
      tags:['HTML','CSS','Bootstrap','Django','Python']
    },
    {
      name:'Blog App',
      summary:"Express yourself with our beautiful blog app! Users can create, read, update, and delete their own posts, while also reading posts from others. Each post features a heading, content, an image, the author’s name, and the date it was posted. With an impressive design, our app provides a vibrant platform for sharing ideas and connecting with a community of writers.",
      projectLink:'https://drive.google.com/file/d/1Dt0coAhncSvpVVGQStMDpb8-x9BTTvXk/view?usp=drive_link',
      codeLink:'https://github.com/bharath62819/blog-app',
      tags:['HTML','CSS','Bootstrap','Django','Python']
    },
]

  constructor(private titleService:Title){
    this.titleService.setTitle("Bharath's-Projects")
  }
}
