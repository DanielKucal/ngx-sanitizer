# Ngx-Sanitizer
## Installation
1. `npm i ngx-sanitizer`
2. Import `NgxSanitizerModule` into your module(s).

## About
This library provides a set of simple yet useful pipes:
- `SafeUrlPipe`
- `SafeHtmlPipe`
- `SafeStylePipe`
- `SafeScriptPipe`
- `SafeResourceUrlPipe`

that can be used to say Angular we trust the data we provide, e.g.:
```typescript
@Component({
  template: `<p [innerHtml]="someUntrustedHtml | safeHtml"></p>`,
})
export class SomeComponent {
    someUntrustedHtml = '<strong onclick="alert(\'and clickable\');">I am Strong!</strong>';
}
```

##### NOTE: Please, make sure you made yourself familiar with [Angular Security Guide](https://angular.io/guide/security) and you know which resources can be trusted.
