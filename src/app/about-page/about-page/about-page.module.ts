import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AboutPageComponent} from '../about-page.component';
import {AboutExtraPageComponent} from '../about-extra-page/about-extra-page.component';
import {SharedModule} from '../../shared/shared/shared.module';
import {RouterModule} from '@angular/router';
import {AppModule} from '../../app.module';

@NgModule({
  declarations: [ // here I declare COMPONENTS which I will use
    AboutPageComponent,
    AboutExtraPageComponent
  ],
  imports: [
    SharedModule,       // shared modules with common essences (pipes, directives)
    CommonModule,       // instead of BrowserModule (ngStyle, ngClass...),
                        // cause BrowserModule must be imported once in main module (app.module.ts)
    RouterModule.forChild([   // declare of this module`s routes using RouterModule.forChild() instead of RouterModule.forRoot
      {
        path: 'about', component: AboutPageComponent, children: [
          {path: 'extra', component: AboutExtraPageComponent}
        ]
      }
    ]),
  ],
  exports: [RouterModule] // exports all native Angular modules, which are imported
})
export class AboutPageModule { }
