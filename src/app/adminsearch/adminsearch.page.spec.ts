import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsearchPage } from './adminsearch.page';

describe('AdminsearchPage', () => {
  let component: AdminsearchPage;
  let fixture: ComponentFixture<AdminsearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminsearchPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminsearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
