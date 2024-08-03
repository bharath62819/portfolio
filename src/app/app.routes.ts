import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
      {
        path:'about',component:AboutComponent
      },
      {
        path:'projects',component:ProjectsComponent
      },
      {
        path:'resume',component:ResumeComponent
      },
      {
        path:'skills',component:SkillsComponent
      },
      {
        path:'contact',component:ContactComponent
      },
      {
        path:'**',component:AboutComponent,pathMatch:'full'
      }
];
