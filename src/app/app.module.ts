import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HomePageComponent} from './home-page/home-page.component';
import {AppRoutingModule} from './app-routing.module';
import {AboutPageModule} from './about-page/about-page/about-page.module';
import {SharedModule} from './shared/shared/shared.module';
import { ModalStaticComponent } from './home-page/modal-static/modal-static.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [ // here I declare COMPONENTS which I will use
    AppComponent,
    HomePageComponent,
    ModalStaticComponent,
  ],
  imports: [
    SharedModule, // with my common essence (pipes, services, directives)
    AboutPageModule,  // my other modules

    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
