import { Component, signal, WritableSignal } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { ButtonComponent } from '../../components/button/button.component';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ProgressBarComponent } from '../../components/progress-bar/progress-bar.component';
import { SettingsComponent } from '../settings/settings.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-profile',
  imports: [ButtonComponent, CommonModule, MatIconModule, NgOptimizedImage, ProgressBarComponent, SettingsComponent, MatMenuModule, MatButtonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  isOpen = false;
  fotos: {label: string, path: string}[] = [{label: 'Padrão', path:'assets/default-avatar.png'}, {label: 'Leão', path:'assets/lion.png'}, {label: 'Gato', path:'assets/cat.webp'}, {label: 'Cachorro', path:'assets/dog.png'}  ];

  perfil: WritableSignal<any> = signal<any>(null);
  

  constructor(private themeService: ThemeService) {
    if(typeof window !== 'undefined') {
      const perfil = window.localStorage.getItem('perfil');
      if(perfil) {
        this.perfil.set(JSON.parse(perfil));
      } else {
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
    } 
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

  updateFoto(foto: string) {
    this.perfil().foto = foto;
    if(typeof window !== 'undefined') {
      window.localStorage.setItem('perfil', JSON.stringify(this.perfil()));
    }
  }
}
