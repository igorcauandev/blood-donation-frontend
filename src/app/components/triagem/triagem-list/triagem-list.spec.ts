import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriagemList } from './triagem-list';

describe('TriagemList', () => {
  let component: TriagemList;
  let fixture: ComponentFixture<TriagemList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TriagemList],
    }).compileComponents();

    fixture = TestBed.createComponent(TriagemList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
