import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultasProComponent } from './consultas-pro.component';

describe('ConsultasProComponent', () => {
  let component: ConsultasProComponent;
  let fixture: ComponentFixture<ConsultasProComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultasProComponent]
    });
    fixture = TestBed.createComponent(ConsultasProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
