import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {PostsComponent} from './posts/posts.component';
import { RoutingComponent } from './routing/routing.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [ // here I declare COMPONENTS which I will use
    AppComponent,
    PostsComponent,
    RoutingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
