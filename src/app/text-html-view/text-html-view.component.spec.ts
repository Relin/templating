import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextHtmlViewComponent } from './text-html-view.component';

describe('TextHtmlViewComponent', () => {
  let component: TextHtmlViewComponent;
  let fixture: ComponentFixture<TextHtmlViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextHtmlViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextHtmlViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
