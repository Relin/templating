import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextHtmlEditComponent } from './text-html-edit.component';

describe('TextHtmlEditComponent', () => {
  let component: TextHtmlEditComponent;
  let fixture: ComponentFixture<TextHtmlEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextHtmlEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextHtmlEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
