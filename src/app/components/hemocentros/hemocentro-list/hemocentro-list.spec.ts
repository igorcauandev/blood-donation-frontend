import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HemocentroList } from './hemocentro-list';

describe('HemocentroList', () => {
  let component: HemocentroList;
  let fixture: ComponentFixture<HemocentroList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HemocentroList],
    }).compileComponents();

    fixture = TestBed.createComponent(HemocentroList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
