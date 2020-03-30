import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {PostsComponent} from './posts/posts.component';
import {PostComponent} from './post/post.component';
import {AboutExtraComponent} from './about-extra/about-extra.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {AuthGuardGuard} from './auth-guard.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},         // localhost:4200/
  {path: 'about', component: AboutComponent,    // localhost:4200/about
    canActivateChild: [AuthGuardGuard],   // put guardians for all childs of page
    children: [  // these childs HAVE TO BE GENERATE BY <router-outlet> INSIDE OF PARENT
      {path: 'extra', component: AboutExtraComponent}   // localhost:4200/about/extra
  ]},
  // in canActivate you need to put all guards
  {path: 'posts', component: PostsComponent},   // localhost:4200/posts
  {path: 'posts/:id', component: PostComponent}, // localhost:4200/posts/${id}   (this id will be in ActivatedRoute.params)
  {path: 'error', component: ErrorPageComponent},
  {path: '**', redirectTo: 'error'}   // redirection to error-page in error case
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // with forRoot we registrate all routes
  exports: [RouterModule]
})
export class AppRoutingModule { }
