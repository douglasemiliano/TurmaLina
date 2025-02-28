import { Routes } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { ButtonComponent } from './components/button/button.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

export const routes: Routes = [
    {path: 'perfil', component: ProfileComponent},
    {path: 'botao', component: WelcomeComponent},
];
