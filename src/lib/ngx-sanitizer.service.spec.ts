import { TestBed } from '@angular/core/testing';

import { NgxSanitizerService } from './ngx-sanitizer.service';

describe('NgxSanitizerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxSanitizerService = TestBed.get(NgxSanitizerService);
    expect(service).toBeTruthy();
  });
});
