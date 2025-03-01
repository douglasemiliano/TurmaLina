import { Routes } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { ButtonComponent } from './components/button/button.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

export const routes: Routes = [
    {path: 'perfil', loadComponent: () => import('./pages/profile/profile.component').then(m => m.ProfileComponent)},
    {path: 'botao', loadComponent: () => import('./pages/welcome/welcome.component').then(m => m.WelcomeComponent)},
    {path: 'cursos', loadComponent: () => import('./pages/curso/listar-curso/listar-curso.component').then(m => m.ListarCursoComponent)},
];
