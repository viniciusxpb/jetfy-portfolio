import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JetfyListfy2Component } from './jetfy-listfy2.component';

describe('JetfyListfy2Component', () => {
  let component: JetfyListfy2Component;
  let fixture: ComponentFixture<JetfyListfy2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JetfyListfy2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JetfyListfy2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
