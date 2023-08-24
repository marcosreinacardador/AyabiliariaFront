import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarProComponent } from './modificar-pro.component';

describe('ModificarProComponent', () => {
  let component: ModificarProComponent;
  let fixture: ComponentFixture<ModificarProComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModificarProComponent]
    });
    fixture = TestBed.createComponent(ModificarProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
