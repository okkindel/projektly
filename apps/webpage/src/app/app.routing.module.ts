import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { NgModule } from '@angular/core';

const routes: Routes = [{ path: 'form', component: FormComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
