import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // with forRoot we registrate all routes of this module
  exports: [RouterModule]
})
export class AppRoutingModule { }

