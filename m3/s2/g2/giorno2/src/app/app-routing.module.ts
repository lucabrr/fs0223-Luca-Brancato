import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './PAGES/home/home.component';
import { PostAttiviComponent } from './PAGES/post-attivi/post-attivi.component';
import { PostNonAttiviComponent } from './PAGES/post-non-attivi/post-non-attivi.component';

const routes: Routes = [
  {
    path : "",
    component : HomeComponent
},
{
  path : "post-attivi",
  component : PostAttiviComponent
},
{
  path : "post-non-attivi",
  component : PostNonAttiviComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
