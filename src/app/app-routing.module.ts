import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoDetailTemplateDrivenFormComponent } from './todo/template-driven/todo-detail-template-driven-form/todo-detail-template-driven-form.component';
import { TodoDetailReactiveFormComponent } from './todo/reactive-form/todo-detail-reactive-form/todo-detail-reactive-form.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'template-driven-form',
    pathMatch: 'full'
  },
  {
    path: 'template-driven-form',
    children: [
      {
        path: '',
        component: TodoListComponent
      },
      {
        path: 'add',
        component: TodoDetailTemplateDrivenFormComponent,
      },
      {
        path: 'edit/:id',
        component: TodoDetailTemplateDrivenFormComponent
      }
    ]
  },
  {
    path: 'reactive-form',
    children: [
      {
        path: '',
        component: TodoListComponent
      },
      {
        path: 'add',
        component: TodoDetailReactiveFormComponent
      },
      {
        path: 'edit/:id',
        component: TodoDetailReactiveFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
