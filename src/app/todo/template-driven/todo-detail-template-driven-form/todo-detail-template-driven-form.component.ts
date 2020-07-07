import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from 'src/app/model/todo';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-todo-detail-template-driven-form',
  templateUrl: './todo-detail-template-driven-form.component.html',
  styleUrls: ['./todo-detail-template-driven-form.component.scss'],
  providers: [DatePipe]
})
export class TodoDetailTemplateDrivenFormComponent implements OnInit {

  statusList: string[];
  priorityList: string[];
  private _todoId: number;
  todo: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private todoService: TodoService,
    private datePipe: DatePipe
  ) { 
    this.statusList = ['Todo', 'In Progress', 'Done'];
    this.priorityList = ['Low', 'Medium', 'High'];
  }

  ngOnInit() {
    this._todoId = +this.activatedRoute.snapshot.params['id'];

    if (!this._todoId) {
      this.createDefaultModel();
    } else {
      const todo = this.todoService.getTodById(this._todoId);
      this.todo = {...todo};
      this.todo.dueDate.startDate = this.convertDateToString(todo.dueDate.startDate);
      this.todo.dueDate.endDate = this.convertDateToString(todo.dueDate.endDate);
    }
  }

  private createDefaultModel() {
    const defaultDate = this.convertDateToString(new Date());
    this.todo = new Todo();
    this.todo.title = '';
    this.todo.status = 'Todo';
    this.todo.priority = 'Low';
    this.todo.dueDate = {
      startDate: defaultDate,
      endDate: defaultDate
    }
    this.todo.description = '';
  }

  // Handling form submission
  onSubmit(todoForm: NgForm) {
    const todo = todoForm.value;
    todo.dueDate.startDate = new Date(todoForm.value.dueDate.startDate);
    todo.dueDate.endDate = new Date(todoForm.value.dueDate.endDate);

    if (this._todoId) {
      todo.id = this._todoId;
      this.onUpdate(this._todoId, todo);
    } else {
      this.onSave(todo);
    }

    console.log(todo);

    this.navigateBack();
  }

  private onSave(todo: Todo) {
    this.todoService.addTodo(todo);
  }

  private onUpdate(id: number, todo: Todo) {
    this.todoService.updateTodo(id, todo)
  }

  private convertDateToString(date: Date): string {
    return this.datePipe.transform(date, 'yyyy-MM-dd', 'en');
  }

  navigateBack() {
    window.history.back();
  }

}
