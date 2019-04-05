import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmissingpersonPage } from './addmissingperson.page';

describe('AddmissingpersonPage', () => {
  let component: AddmissingpersonPage;
  let fixture: ComponentFixture<AddmissingpersonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmissingpersonPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmissingpersonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
