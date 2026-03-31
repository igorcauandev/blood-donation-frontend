import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolsasForm } from './bolsas-form';

describe('BolsasForm', () => {
  let component: BolsasForm;
  let fixture: ComponentFixture<BolsasForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BolsasForm],
    }).compileComponents();

    fixture = TestBed.createComponent(BolsasForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
