import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-toggle-button',
  imports: [MatIconModule],
  templateUrl: './toggle-button.component.html',
  styleUrl: './toggle-button.component.scss'
})
export class ToggleButtonComponent {
  @Input() type: 'primary' | 'secondary' | 'aux' | 'accent' = 'primary';
  @Input() label: string = '';
  @Input() iconName?: string;
  @Input() theme: 'dark-theme' | 'light-theme' = 'dark-theme';
 
  @Output() onClick = new EventEmitter<void>();


  clickEmitter(): void {
    console.log("entrou no clickEmitter");
    this.onClick.emit();
  }

}
