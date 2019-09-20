import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable()
export abstract class AbstractPipe {
  constructor(protected domSanitizer: DomSanitizer) {}
  public abstract transform(value: any);
}
