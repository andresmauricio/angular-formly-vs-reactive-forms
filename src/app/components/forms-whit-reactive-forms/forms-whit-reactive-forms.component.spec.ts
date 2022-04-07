import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsWhitReactiveFormsComponent } from './forms-whit-reactive-forms.component';

describe('FormsWhitReactiveFormsComponent', () => {
  let component: FormsWhitReactiveFormsComponent;
  let fixture: ComponentFixture<FormsWhitReactiveFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsWhitReactiveFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsWhitReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
