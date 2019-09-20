import { Pipe, PipeTransform } from '@angular/core';
import { AbstractPipe } from './abstract.pipe';
import { SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'safeHtml'
})
export class SafeHtmlPipe extends AbstractPipe implements PipeTransform {
  transform(html: string, ...args: any[]): SafeHtml {
    return this.domSanitizer.bypassSecurityTrustHtml(html);
  }
}
