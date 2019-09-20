import { Pipe, PipeTransform } from '@angular/core';
import { SafeStyle } from '@angular/platform-browser';
import { AbstractPipe } from './abstract.pipe';

@Pipe({
  name: 'safeStyle'
})
export class SafeStylePipe extends AbstractPipe implements PipeTransform {
  transform(style: any, ...args: any[]): SafeStyle {
    return this.domSanitizer.bypassSecurityTrustStyle(style);
  }
}
