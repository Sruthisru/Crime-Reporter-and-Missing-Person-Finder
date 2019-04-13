import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcomplaintsPage } from './listcomplaints.page';

describe('ListcomplaintsPage', () => {
  let component: ListcomplaintsPage;
  let fixture: ComponentFixture<ListcomplaintsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListcomplaintsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcomplaintsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
