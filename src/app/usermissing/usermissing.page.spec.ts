import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermissingPage } from './usermissing.page';

describe('UsermissingPage', () => {
  let component: UsermissingPage;
  let fixture: ComponentFixture<UsermissingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsermissingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsermissingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
