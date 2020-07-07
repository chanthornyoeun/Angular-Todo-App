import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoDetailReactiveFormComponent } from './todo/reactive-form/todo-detail-reactive-form/todo-detail-reactive-form.component';
import { TodoDetailTemplateDrivenFormComponent } from './todo/template-driven/todo-detail-template-driven-form/todo-detail-template-driven-form.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    TodoListComponent,
    TodoDetailReactiveFormComponent,
    TodoDetailTemplateDrivenFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
