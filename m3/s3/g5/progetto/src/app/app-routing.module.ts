import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { AuthGuard } from './Pages/authorizzation/auth.guard';

const routes: Routes = [
  { path:"", component: HomeComponent}
  ,{ path: 'authorizzation', loadChildren: () => import('./Pages/authorizzation/authorizzation.module').then(m => m.AuthorizzationModule) },
  { path: 'Admin',canActivate: [AuthGuard] , loadChildren: () => import('./Pages/admins-page/admins-page.module').then(m => m.AdminsPageModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
