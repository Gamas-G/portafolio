import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { ProyectosPageComponent } from './pages/proyectos/proyectos.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';

export const routes: Routes = [
  { path:'home',  component: PortafolioComponent },
  { path:'proyectos', component: ProyectosPageComponent },
  { path:'**',    pathMatch:'full', redirectTo: 'home' },
];
