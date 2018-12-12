import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnDestroy,
  ViewEncapsulation,
} from '@angular/core';
import { CanColor, CanColorCtor, mixinColor } from '../core/common-behavior/color';
import { CanDisable, CanDisableCtor, mixinDisabled } from '../core/common-behavior/disable';
import { FocusMonitor } from '@angular/cdk/a11y';

export type FlyButtonSize = 'sm' | 'md' | 'lg';

// Boilerplate for applying mixins to Button.
export class FlyButtonBase {
  constructor(public _elementRef: ElementRef) {
  }
}

export const _FlyButtonMixinBase:
  CanDisableCtor & CanColorCtor & typeof FlyButtonBase =
  mixinColor(mixinDisabled(FlyButtonBase), 'btn', 'primary');

@Component({
  selector: 'button[fly-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  exportAs: 'matButton',
  inputs: ['disabled', 'color'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlyButton extends _FlyButtonMixinBase
  implements OnDestroy, CanDisable, CanColor {
  @HostBinding('class.btn')
  private readonly hostClass: boolean = true;
  private _size: FlyButtonSize;

  /**
   * Button Size
   */
  @Input()
  get size(): FlyButtonSize {
    return this._size;
  }

  set size(value: FlyButtonSize) {
    if (this._size !== value) {
      if (this._size) {
        this._elementRef.nativeElement.classList.remove(`btn-${this._size}`);
      }
      if (value && (value === 'lg' || value === 'sm')) {
        this._elementRef.nativeElement.classList.add(`btn-${value}`);
      }

      this._size = value;
    }
  }

  constructor(elementRef: ElementRef,
              private _focusMonitor: FocusMonitor) {
    super(elementRef);

    this._focusMonitor.monitor(this._elementRef, true);
  }

  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this._elementRef);
  }

}
