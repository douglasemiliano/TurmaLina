import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-activity-button',
  imports: [MatIconModule],
  templateUrl: './activity-button.component.html',
  styleUrl: './activity-button.component.scss'
})
export class ActivityButtonComponent {

  @Input() type: 'primary' | 'secondary' | 'aux' | 'icon' = 'primary';
  @Input() label: string = '';
  @Input() iconName?: string;

  @Output() onClick = new EventEmitter<void>();

  clickEmitter(): void {
    this.onClick.emit();
  }
}
