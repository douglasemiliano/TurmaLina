import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ThemeService } from '../../services/theme.service';
import { ButtonComponent } from '../../components/button/button.component';
import { ToggleButtonComponent } from '../../components/toggle-button/toggle-button.component';
import { ActivityButtonComponent } from '../../components/activity-button/activity-button.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
  imports: [MatIconModule, ToggleButtonComponent, ActivityButtonComponent]
})
export class WelcomeComponent {
  isDarkTheme = false;

  constructor(private themeService: ThemeService)
   {

  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  getTheme() {
    return this.themeService.getTheme();
  }

}
  