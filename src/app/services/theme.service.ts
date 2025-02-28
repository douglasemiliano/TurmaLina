import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentTheme: 'light-theme' | 'dark-theme' = 'light-theme';

  constructor() {
    this.loadTheme();
  }

  toggleTheme(): void {
    this.currentTheme = this.currentTheme === 'light-theme' ? 'dark-theme' : 'light-theme';
    document.body.className = this.currentTheme; // Aplica o tema no body
    if (typeof localStorage !== "undefined") {
      window.localStorage.setItem('theme', this.currentTheme); // Salva no localStorage
    }
  }

  loadTheme(): void {

    if (typeof localStorage !== "undefined") {
      const savedTheme = localStorage.getItem('theme') as 'light-theme' | 'dark-theme';
      if (savedTheme) {
        this.currentTheme = savedTheme;
      }
      document.body.className = this.currentTheme;
      
    }

  }


  getTheme(): 'light-theme' | 'dark-theme' {
    return this.currentTheme;
  }

}