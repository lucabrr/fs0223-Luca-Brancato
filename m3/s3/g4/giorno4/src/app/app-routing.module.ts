import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';

const routes: Routes =
[
  { path: 'autorizzazione', loadChildren: () => import('./Pages/autorizzazione/autorizzazione.module').then(m => m.AutorizzazioneModule) },
  {path: "", component:HomeComponent  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
