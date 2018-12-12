import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlyButton } from './button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FlyButton],
  exports: [FlyButton]
})
export class ButtonModule { }
