import { Routes } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { ButtonComponent } from './components/button/button.component';

export const routes: Routes = [
    {path: 'perfil', component: ProfileComponent},
    {path: 'botao', component: ButtonComponent},
];
