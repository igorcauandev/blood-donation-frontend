import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoadorForm } from './doador-form';

describe('DoadorForm', () => {
  let component: DoadorForm;
  let fixture: ComponentFixture<DoadorForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoadorForm],
    }).compileComponents();

    fixture = TestBed.createComponent(DoadorForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
