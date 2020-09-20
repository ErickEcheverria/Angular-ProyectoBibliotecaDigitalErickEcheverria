import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalLibrosrevistasComponent } from './principal-librosrevistas.component';

describe('PrincipalLibrosrevistasComponent', () => {
  let component: PrincipalLibrosrevistasComponent;
  let fixture: ComponentFixture<PrincipalLibrosrevistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalLibrosrevistasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalLibrosrevistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
