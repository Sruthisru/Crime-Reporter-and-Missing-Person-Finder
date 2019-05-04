import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercomplaintPage } from './usercomplaint.page';

describe('UsercomplaintPage', () => {
  let component: UsercomplaintPage;
  let fixture: ComponentFixture<UsercomplaintPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsercomplaintPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsercomplaintPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
