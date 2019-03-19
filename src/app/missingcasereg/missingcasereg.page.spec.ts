import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissingcaseregPage } from './missingcasereg.page';

describe('MissingcaseregPage', () => {
  let component: MissingcaseregPage;
  let fixture: ComponentFixture<MissingcaseregPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissingcaseregPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissingcaseregPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
