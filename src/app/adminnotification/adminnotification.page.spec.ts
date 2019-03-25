import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminnotificationPage } from './adminnotification.page';

describe('AdminnotificationPage', () => {
  let component: AdminnotificationPage;
  let fixture: ComponentFixture<AdminnotificationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminnotificationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminnotificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
