import { Routes } from '@angular/router';


export const routes: Routes = [
    {path: '', redirectTo: 'cursos', pathMatch: 'full'},
    {path: 'perfil', loadComponent: () => import('./pages/profile/profile.component').then(m => m.ProfileComponent)},
    {path: 'botao', loadComponent: () => import('./pages/welcome/welcome.component').then(m => m.WelcomeComponent)},
    {path: 'cursos', loadComponent: () => import('./pages/curso/listar-curso/listar-curso.component').then(m => m.ListarCursoComponent)},
    {path: 'cursos/:id', loadComponent: () => import('./pages/atividade/listar-atividade/listar-atividade.component').then(m => m.ListarAtividadeComponent)},
];
