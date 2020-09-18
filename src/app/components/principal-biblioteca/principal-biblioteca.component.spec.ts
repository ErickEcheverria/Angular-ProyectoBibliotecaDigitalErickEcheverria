import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalBibliotecaComponent } from './principal-biblioteca.component';

describe('PrincipalBibliotecaComponent', () => {
  let component: PrincipalBibliotecaComponent;
  let fixture: ComponentFixture<PrincipalBibliotecaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalBibliotecaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalBibliotecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});