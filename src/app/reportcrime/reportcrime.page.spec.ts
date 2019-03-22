import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportcrimePage } from './reportcrime.page';

describe('ReportcrimePage', () => {
  let component: ReportcrimePage;
  let fixture: ComponentFixture<ReportcrimePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportcrimePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportcrimePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
