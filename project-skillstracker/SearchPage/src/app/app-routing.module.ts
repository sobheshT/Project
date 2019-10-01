import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DropdownSplitComponent } from './dropdown-split/dropdown-split.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { AddSkillsToAssociateComponent } from './add-skills-to-associate/add-skills-to-associate.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AddSkillsComponent } from './add-skills/add-skills.component';
import {HomeComponent} from './home/home.component';

import { from } from 'rxjs';

const routes: Routes = [
  // {
  //   path: 'star/:id',
  //   component: StarRatingComponent,
  //   pathMatch:'full'
  // },
  
  {
    path:'home',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path: 'loginPage', 
    component: LoginPageComponent,
    pathMatch:'full'
  },
  
  

  
  {
    path: 'searchPage', 
    component: DropdownSplitComponent,
    pathMatch:'full'
  },
 {
        path: 'star/:id',
        component: StarRatingComponent,
        children: [
          {
            path: 'displaySkills/:id',
            component: AddSkillsComponent,
          }
        ]

      },
    
  
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
