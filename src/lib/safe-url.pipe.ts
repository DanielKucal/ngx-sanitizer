import { Pipe, PipeTransform } from '@angular/core';
import { AbstractPipe } from './abstract.pipe';
import { SafeUrl } from '@angular/platform-browser';

@Pipe({
  name: 'safeUrl'
})
export class SafeUrlPipe extends AbstractPipe implements PipeTransform {
  transform(url: any, ...args: any[]): SafeUrl {
    return this.domSanitizer.bypassSecurityTrustUrl(url);
  }
}
