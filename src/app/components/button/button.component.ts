import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-button',
  imports: [MatIconModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  @Input() type: 'primary' | 'secondary' | 'aux' | 'color-mode' = 'primary';
  @Input() label: string = 'Button';
  @Input() iconName?: string;

  @Output() onClick = new EventEmitter<void>();

  clickEmitter(): void {
    this.onClick.emit();
  }

}
