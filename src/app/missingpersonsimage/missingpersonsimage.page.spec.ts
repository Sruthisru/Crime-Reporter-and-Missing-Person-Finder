import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissingpersonsimagePage } from './missingpersonsimage.page';

describe('MissingpersonsimagePage', () => {
  let component: MissingpersonsimagePage;
  let fixture: ComponentFixture<MissingpersonsimagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissingpersonsimagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissingpersonsimagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
