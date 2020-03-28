import { BrowserModule } from '@angular/platform-browser';
import {NgModule, Provider} from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from './auth.interceptor';

// for interceptors
const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS, // type of provider
  useClass: AuthInterceptor, // which class
  multi: true // can use many providers
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [INTERCEPTOR_PROVIDER], // register interceptor
  bootstrap: [AppComponent]
})
export class AppModule {}
