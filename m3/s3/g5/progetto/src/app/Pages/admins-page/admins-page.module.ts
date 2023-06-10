import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminsPageRoutingModule } from './admins-page-routing.module';
import { AdminsPageComponent } from './admins-page.component';


@NgModule({
  declarations: [
    AdminsPageComponent
  ],
  imports: [
    CommonModule,
    AdminsPageRoutingModule
  ]
})
export class AdminsPageModule { }
