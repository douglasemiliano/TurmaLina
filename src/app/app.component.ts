import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ThemeService } from './services/theme.service';
import { ButtonComponent } from './components/button/button.component';
import {MatTabsModule} from '@angular/material/tabs';
import { ProfileComponent } from './pages/profile/profile.component';
import { MatIconModule } from '@angular/material/icon';
import { BottomBarComponent } from './components/bottom-bar/bottom-bar.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatTabsModule, MatIconModule, BottomBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TurmaLina';

  currentTheme: 'light-theme' | 'dark-theme' = 'light-theme';


  private router = inject(Router);

  constructor(private themeService: ThemeService) {

  }

  toggleTheme() {  
    this.themeService.toggleTheme();
  }

  goTo(path: string) {
    this.router.navigate([path]);
  }

}
