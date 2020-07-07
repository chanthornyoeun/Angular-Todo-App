import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { TodoService } from 'src/app/services/todo.service';
import { ActivatedRoute } from '@angular/router';
import { Todo } from 'src/app/model/todo';

@Component({
  selector: 'app-todo-detail-reactive-form',
  templateUrl: './todo-detail-reactive-form.component.html',
  styleUrls: ['./todo-detail-reactive-form.component.scss'],
  providers: [DatePipe]
})
export class TodoDetailReactiveFormComponent implements OnInit {

  statusList: string[];
  priorityList: string[];
  todoForm: FormGroup;
  private _todoId: number;

  constructor(
    private datePipe: DatePipe,
    private todoService: TodoService,
    private activatedRoute: ActivatedRoute
  ) { 
    this.statusList = ['Todo', 'In Progress', 'Done'];
    this.priorityList = ['Low', 'Medium', 'High'];
  }

  ngOnInit() {
    this.createTodoForm();
    this._todoId = +this.activatedRoute.snapshot.params['id'];

    if (this._todoId) {
      const todo = this.todoService.getTodById(this._todoId);
      const dueDate = {
        startDate: this.convertDateToString(todo.dueDate.startDate),
        endDate: this.convertDateToString(todo.dueDate.endDate)
      }
      this.todoForm.patchValue(todo);
      this.todoForm.get('dueDate').setValue(dueDate);
    }
  }

  private createTodoForm() {
    const defaultDate = this.convertDateToString(new Date());
    this.todoForm = new FormGroup({
      title: new FormControl('', Validators.required),
      status: new FormControl('Todo', Validators.required),
      priority: new FormControl('Low', Validators.required),
      dueDate: new FormGroup({
        startDate: new FormControl(defaultDate, Validators.required),
        endDate: new FormControl(defaultDate, Validators.required)
      }),
      description: new FormControl('')
    });
  }

  private convertDateToString(date: Date): string {
    return this.datePipe.transform(date, 'yyyy-MM-dd', 'en');
  }

  // Handling form submittion
  onSubmit() {
    const todo = this.todoForm.value;
    todo.dueDate.startDate = new Date(todo.dueDate.startDate);
    todo.dueDate.endDate = new Date(todo.dueDate.endDate);
    
    if (this._todoId) {
      todo.id = this._todoId;
      this.onUpdate(this._todoId, todo);
    } else {
      this.onSave(todo);
    }

    this.navigateBack();
  }

  private onSave(todo: Todo) {
    this.todoService.addTodo(todo);
  }

  private onUpdate(id: number, todo: Todo) {
    this.todoService.updateTodo(id, todo)
  }

  navigateBack() {
    window.history.back();
  }

}
