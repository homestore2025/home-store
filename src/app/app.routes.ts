import { Routes } from '@angular/router';
import HomeComponent from './paginas/home/home.component';
import { CortinasComponent } from './paginas/cortinas/cortinas.component';
import { CentrosentrenimientotvComponent } from './paginas/centrosentrenimientotv/centrosentrenimientotv.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';

export const routes: Routes = [
    {
        path: 'inicio',
        loadComponent: () => import('./paginas/home/home.component')
    },
    {
        path: 'corinasypersianas',
        loadComponent: () => import('./paginas/cortinas/cortinas.component').then((m)=>m.CortinasComponent)
    },
    {
        path: 'centrosdeentrenimientotv',
        loadComponent: () => import('./paginas/centrosentrenimientotv/centrosentrenimientotv.component').then((m)=>m.CentrosentrenimientotvComponent)
    },
    {
        path: 'contacto',
        loadComponent: () => import('./paginas/contacto/contacto.component').then((m)=>m.ContactoComponent)
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'inicio'
        
    }
];

