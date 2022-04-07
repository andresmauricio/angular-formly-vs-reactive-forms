import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsWhitFormlyComponent } from './forms-whit-formly.component';

describe('FormsWhitFormlyComponent', () => {
  let component: FormsWhitFormlyComponent;
  let fixture: ComponentFixture<FormsWhitFormlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsWhitFormlyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsWhitFormlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
