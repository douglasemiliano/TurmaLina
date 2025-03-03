import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bottom-bar',
  imports: [MatIconModule],
  templateUrl: './bottom-bar.component.html',
  styleUrl: './bottom-bar.component.scss'
})
export class BottomBarComponent {

  private router = inject(Router);

  isActive(path: string) {
    return this.router.url === path || this.router.url.includes(path);
  }

  goTo(path: string) {
    this.router.navigate([path]);
  }

}
