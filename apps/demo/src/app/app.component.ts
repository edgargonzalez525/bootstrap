import { Component } from '@angular/core';
import { FlyButtonSize, ThemePalette } from '@flyerjs/bootstrap';

@Component({
  selector: 'flyerjs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  colors: ThemePalette[] = [
    'primary',
    'secondary',
    'success',
    'info',
    'warning',
    'danger',
    'light',
    'dark',
  ];
  color: string = this.colors[0];

  sizes: FlyButtonSize[] = [
    'sm',
    'md',
    'lg',
  ];
  size: FlyButtonSize = this.sizes[0];
}
