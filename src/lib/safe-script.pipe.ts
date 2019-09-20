import { Pipe, PipeTransform } from '@angular/core';
import { AbstractPipe } from './abstract.pipe';
import { SafeScript } from '@angular/platform-browser';

@Pipe({
  name: 'safeScript'
})
export class SafeScriptPipe extends AbstractPipe implements PipeTransform {
  transform(script: any, ...args: any[]): SafeScript {
    return this.domSanitizer.bypassSecurityTrustScript(script);
  }
}
