import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyButton } from './button.component';

describe('FlyButton', () => {
  let component: FlyButton;
  let fixture: ComponentFixture<FlyButton>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlyButton ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlyButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
