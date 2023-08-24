import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadosProComponent } from './listados-pro.component';

describe('ListadosProComponent', () => {
  let component: ListadosProComponent;
  let fixture: ComponentFixture<ListadosProComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadosProComponent]
    });
    fixture = TestBed.createComponent(ListadosProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
