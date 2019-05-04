import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcrimesPage } from './listcrimes.page';

describe('ListcrimesPage', () => {
  let component: ListcrimesPage;
  let fixture: ComponentFixture<ListcrimesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListcrimesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcrimesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
