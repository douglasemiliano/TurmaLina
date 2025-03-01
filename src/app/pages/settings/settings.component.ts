import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from '../../components/button/button.component';
import { ThemeService } from '../../services/theme.service';
import { ToggleButtonComponent } from '../../components/toggle-button/toggle-button.component';

@Component({
  selector: 'app-settings',
  imports: [MatIconModule, ButtonComponent, ToggleButtonComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent implements OnChanges {
  @Input() isOpen: boolean = true; // Controla a exibição do card
  @Output() close = new EventEmitter<void>(); isDarkTheme = false;

  constructor(private themeService: ThemeService)
   {

  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  getTheme() {
    return this.themeService.getTheme();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isOpen']) {
      console.log('isOpen changed:', this.isOpen);
    }
  }


  closeCard() {
    console.log("entrou no closeCard");
    this.close.emit();
  }

  toggleCard() {
    // console.log('toggleCard');
    // console.log(this.isOpen);
    // this.isOpen = !this.isOpen;
    this.close.emit();
  }
  
}
