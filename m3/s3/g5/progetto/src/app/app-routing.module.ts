import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';

const routes: Routes = [
  { path:"", component: HomeComponent}
  ,{ path: 'authorizzation', loadChildren: () => import('./Pages/authorizzation/authorizzation.module').then(m => m.AuthorizzationModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
