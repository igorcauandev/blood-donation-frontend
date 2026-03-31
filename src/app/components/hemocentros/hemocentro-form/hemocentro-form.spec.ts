import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HemocentroForm } from './hemocentro-form';

describe('HemocentroForm', () => {
  let component: HemocentroForm;
  let fixture: ComponentFixture<HemocentroForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HemocentroForm],
    }).compileComponents();

    fixture = TestBed.createComponent(HemocentroForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
