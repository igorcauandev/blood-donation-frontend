import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolsasList } from './bolsas-list';

describe('BolsasList', () => {
  let component: BolsasList;
  let fixture: ComponentFixture<BolsasList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BolsasList],
    }).compileComponents();

    fixture = TestBed.createComponent(BolsasList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
