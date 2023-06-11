import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminsPageComponent } from './admins-page.component';
import { CreatePostComponent } from './create-post/create-post/create-post.component';

const routes: Routes = [
  { path: '', component: AdminsPageComponent },
  { path: 'create', component: CreatePostComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminsPageRoutingModule { }
