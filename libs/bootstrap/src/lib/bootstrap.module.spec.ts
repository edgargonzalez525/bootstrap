import { async, TestBed } from '@angular/core/testing';
import { BootstrapModule } from './bootstrap.module';

describe('BootstrapModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BootstrapModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(BootstrapModule).toBeDefined();
  });
});
