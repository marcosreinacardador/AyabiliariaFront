import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadosClienteComponent } from './listados-cliente.component';

describe('ListadosClienteComponent', () => {
  let component: ListadosClienteComponent;
  let fixture: ComponentFixture<ListadosClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadosClienteComponent]
    });
    fixture = TestBed.createComponent(ListadosClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
