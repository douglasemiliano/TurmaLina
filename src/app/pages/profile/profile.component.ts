import { Component, signal, WritableSignal } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { ButtonComponent } from '../../components/button/button.component';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ProgressBarComponent } from '../../components/progress-bar/progress-bar.component';
import { SettingsComponent } from '../settings/settings.component';

@Component({
  selector: 'app-profile',
  imports: [ButtonComponent, CommonModule, MatIconModule, NgOptimizedImage, ProgressBarComponent, SettingsComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  isOpen = false;

  perfil: WritableSignal<any> = signal<any>(null);
  

  constructor(private themeService: ThemeService) {
  this.perfil.set({nome: 'Douglas Emiliano', email: 'emaildedouglas@gmail.com', foto: 'assets/lion.png', 
      badges: [
        { nome: 'Explorador', foto: '🧑‍🚀' }, // Explorador com emoji de astronauta (tom mais escuro)
        { nome: 'Finalizador', foto: '🏊🏾‍♂️' }, // Finalizador com emoji de nadador (tom mais escuro)
        { nome: 'Aventureiro', foto: '🧗🏾‍♂️' }, // Aventureiro com emoji de alpinista (tom mais escuro)
        { nome: 'Iniciante', foto: '👣' }, // Iniciante com emoji de pegada (não é amarelo)
        { nome: 'Conquistador', foto: '🏅' }, // Conquistador com emoji de medalha (tom mais escuro)
        { nome: 'Guerreiro', foto: '🛡️' }, // Guerreiro com emoji de escudo
        { nome: 'Mestre', foto: '🧙🏾‍♂️' }, // Mestre com emoji de mago (tom mais escuro)
        { nome: 'Líder', foto: '👑' }, // Líder com emoji de coroa (tom mais escuro)
        { nome: 'Herói', foto: '🦸🏾‍♂️' }, // Herói com emoji de super-herói (tom mais escuro)
        { nome: 'Legendário', foto: '🌠' } 
      ]  }
    );
  }

  closeCard() {
    console.log("entrou no closeCard");
    this.isOpen = false; // Fecha o card quando recebe o evento
  }

  toggleCard() {
    this.isOpen = !this.isOpen;
    console.log(this.isOpen);
    
  }

  getTheme() {
    return this.themeService.getTheme();
  }

  toggleTheme() {  
    this.themeService.toggleTheme();
  }
}
