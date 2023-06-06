import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormNormalComponent } from './Pages/form-normal/form-normal.component';
import { ReactiveFormComponent } from './Pages/reactive-form/reactive-form.component';

const routes: Routes = [
  {
    path:"",
    component:FormNormalComponent
  },
  {
    path:"reactiveForm",
    component:ReactiveFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
