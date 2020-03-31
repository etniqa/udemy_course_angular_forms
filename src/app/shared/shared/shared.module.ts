import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageNamePipe} from '../page-name.pipe';
import {ColorDirective} from '../color.directive';

// this is module, but isn`t a component
@NgModule({
  declarations: [
    PageNamePipe,
    ColorDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [    // show to other that this module declare these components (in case of NOT-COMPONENT module)
    PageNamePipe,
    ColorDirective
  ],
})
export class SharedModule { }
