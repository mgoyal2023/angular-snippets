import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './feature/components/form/form.component';
import { UserListComponent } from './feature/components/user-list/user-list.component';

const routes: Routes = [
  {
    path: '',
    component: FormComponent
  },
  {
    path: 'users',
    component: UserListComponent
  },
  {
    path: 'form/:id',
    component: FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
