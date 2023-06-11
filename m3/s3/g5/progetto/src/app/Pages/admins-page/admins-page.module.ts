import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminsPageRoutingModule } from './admins-page-routing.module';
import { AdminsPageComponent } from './admins-page.component';
import { CreatePostComponent } from './create-post/create-post/create-post.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminsPageComponent,
    CreatePostComponent
  ],
  imports: [
    CommonModule,
    AdminsPageRoutingModule,
    FormsModule
  ]
})
export class AdminsPageModule { }
