import { TestBed, inject } from '@angular/core/testing';

import { TextHtmlService } from './text-html.service';

describe('TextHtmlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TextHtmlService]
    });
  });

  it('should be created', inject([TextHtmlService], (service: TextHtmlService) => {
    expect(service).toBeTruthy();
  }));
});
