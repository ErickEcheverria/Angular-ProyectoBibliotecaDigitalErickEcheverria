import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarSesionComponent } from './navbar-sesion.component';

describe('NavbarSesionComponent', () => {
  let component: NavbarSesionComponent;
  let fixture: ComponentFixture<NavbarSesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarSesionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
