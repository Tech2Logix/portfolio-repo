import { Component, Input } from '@angular/core';

@Component({
  selector: 'circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss']
})
export class CircleComponent {
  @Input() label: string | null = null;
  @Input() fontSize: string | null = null;
  @Input() size: string | null = null;
  @Input() color: string | null = null;

  generateStyle() {
    return {
      height: `${this.size}px`,
      width: `${this.size}px`,
      background: this.color
    };
  }
  generateFontSize() {
    return {
      fontSize: this.fontSize === null ? "1.5rem" : `${this.fontSize}rem`
    };
  }
}
