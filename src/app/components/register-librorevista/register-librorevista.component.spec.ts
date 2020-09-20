import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterLibrorevistaComponent } from './register-librorevista.component';

describe('RegisterLibrorevistaComponent', () => {
  let component: RegisterLibrorevistaComponent;
  let fixture: ComponentFixture<RegisterLibrorevistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterLibrorevistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterLibrorevistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
