import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarLibrorevistaComponent } from './eliminar-librorevista.component';

describe('EliminarLibrorevistaComponent', () => {
  let component: EliminarLibrorevistaComponent;
  let fixture: ComponentFixture<EliminarLibrorevistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarLibrorevistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarLibrorevistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
