import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaProComponent } from './alta-pro.component';

describe('AltaProComponent', () => {
  let component: AltaProComponent;
  let fixture: ComponentFixture<AltaProComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AltaProComponent]
    });
    fixture = TestBed.createComponent(AltaProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
