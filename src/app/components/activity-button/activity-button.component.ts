import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-activity-button',
  imports: [MatIconModule],
  templateUrl: './activity-button.component.html',
  styleUrl: './activity-button.component.scss'
})
export class ActivityButtonComponent {

  @Input() type: 'primary' | 'secondary' | 'aux' | 'icon' | 'accent' = 'primary';
  @Input() label: string = '';
  @Input() iconName?: string;
  @Input() isDisabled: 'true' | 'false' = 'false';

  @Output() onClick = new EventEmitter<void>();
  isClicked = false;

  clickEmitter(): void {
    navigator.vibrate(100);
    console.log(this.isDisabled);
    
    this.isClicked = true;
    this.onClick.emit();
    this.resetClick();
  } 

  resetClick(): void {
    setTimeout(() => {
      this.isClicked = false;
    }, 300);
  }
  
}
