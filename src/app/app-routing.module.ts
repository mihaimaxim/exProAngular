import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RoadsComponent } from './works/roads/roads.component';
import { AccessComponent } from './works/access/access.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'roads', component: RoadsComponent},
  { path: 'access', component: AccessComponent},
  { path: '**', redirectTo: ''}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
