import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminaccountPage } from './adminaccount.page';

describe('AdminaccountPage', () => {
  let component: AdminaccountPage;
  let fixture: ComponentFixture<AdminaccountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminaccountPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminaccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
