import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintstatusPage } from './complaintstatus.page';

describe('ComplaintstatusPage', () => {
  let component: ComplaintstatusPage;
  let fixture: ComponentFixture<ComplaintstatusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplaintstatusPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplaintstatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
