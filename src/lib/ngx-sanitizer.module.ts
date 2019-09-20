import { NgModule } from '@angular/core';
import { SafeHtmlPipe } from './safe-html.pipe';
import { SafeStylePipe } from './safe-style.pipe';
import { SafeScriptPipe } from './safe-script.pipe';
import { SafeUrlPipe } from './safe-url.pipe';
import { SafeResourceUrlPipe } from './safe-resource-url.pipe';
import { CommonModule } from '@angular/common';

const pipes = [
  SafeUrlPipe,
  SafeHtmlPipe,
  SafeStylePipe,
  SafeScriptPipe,
  SafeResourceUrlPipe,
];

@NgModule({
  declarations: [
    ...pipes,
  ],
  imports: [
    CommonModule,
  ],
  exports: [...pipes],
})
export class NgxSanitizerModule { }
