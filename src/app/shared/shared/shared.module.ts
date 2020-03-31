import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageNamePipe} from '../page-name.pipe';
import {ColorDirective} from '../color.directive';

// this is module, but only with essence, which in common using
@NgModule({
  declarations: [
    PageNamePipe, // pipe
    ColorDirective  // directive
  ],
  imports: [
    CommonModule  // instead of BrowserModule (ngStyle, *ngFor)
  ],
  exports: [    // show to other that this module declare these components
    PageNamePipe,
    ColorDirective
  ],
})
export class SharedModule { }
