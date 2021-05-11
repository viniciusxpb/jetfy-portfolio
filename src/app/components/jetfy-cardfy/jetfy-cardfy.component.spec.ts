import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JetfyCardfyComponent } from './jetfy-cardfy.component';

describe('JetfyCardfyComponent', () => {
  let component: JetfyCardfyComponent;
  let fixture: ComponentFixture<JetfyCardfyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JetfyCardfyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JetfyCardfyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
