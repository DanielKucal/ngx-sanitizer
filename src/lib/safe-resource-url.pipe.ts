import { Pipe, PipeTransform } from '@angular/core';
import { AbstractPipe } from './abstract.pipe';
import { SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'safeResourceUrl'
})
export class SafeResourceUrlPipe extends AbstractPipe implements PipeTransform {
  transform(resourceUrl: any, ...args: any[]): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(resourceUrl);
  }
}
