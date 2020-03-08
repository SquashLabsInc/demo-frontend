import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {TaskCreateComponent} from '././task-create/task-create.component'

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/' },
  { path: 'create-task', component: TaskCreateComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
