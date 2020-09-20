import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarLibrorevistaComponent } from './modificar-librorevista.component';

describe('ModificarLibrorevistaComponent', () => {
  let component: ModificarLibrorevistaComponent;
  let fixture: ComponentFixture<ModificarLibrorevistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarLibrorevistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarLibrorevistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
