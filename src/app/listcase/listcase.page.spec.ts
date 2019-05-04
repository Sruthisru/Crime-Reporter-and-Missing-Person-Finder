import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcasePage } from './listcase.page';

describe('ListcasePage', () => {
  let component: ListcasePage;
  let fixture: ComponentFixture<ListcasePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListcasePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
