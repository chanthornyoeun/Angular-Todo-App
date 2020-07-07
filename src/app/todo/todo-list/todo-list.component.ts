import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from 'src/app/model/todo';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: Todo[];

  constructor(private todoService: TodoService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.todos = this.todoService.getAllTodo();
  }

  deleteTodoById(id: number) {
    const confirm = window.confirm(`Do you want to delete todo id ${id}?`);
    if (confirm) {
      this.todoService.deleteTodoById(id);
    }
  }

  navigateToAdd() {
    this.router.navigate(['add'], {relativeTo: this.activatedRoute});
  }

  navigateToEdit(id: number) {
    this.router.navigate([`edit/${id}`], {relativeTo: this.activatedRoute});
  }

}

