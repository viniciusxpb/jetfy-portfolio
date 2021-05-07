import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JetfyListfyComponent } from './jetfy-listfy.component';

describe('JetfyListfyComponent', () => {
  let component: JetfyListfyComponent;
  let fixture: ComponentFixture<JetfyListfyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JetfyListfyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JetfyListfyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
