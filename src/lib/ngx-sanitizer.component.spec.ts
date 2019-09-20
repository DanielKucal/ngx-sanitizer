import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSanitizerComponent } from './ngx-sanitizer.component';

describe('NgxSanitizerComponent', () => {
  let component: NgxSanitizerComponent;
  let fixture: ComponentFixture<NgxSanitizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxSanitizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSanitizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
