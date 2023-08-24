import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultasClienteComponent } from './consultas-cliente.component';

describe('ConsultasClienteComponent', () => {
  let component: ConsultasClienteComponent;
  let fixture: ComponentFixture<ConsultasClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultasClienteComponent]
    });
    fixture = TestBed.createComponent(ConsultasClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
