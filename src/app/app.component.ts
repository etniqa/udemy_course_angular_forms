import {Component, Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, delay} from 'rxjs/operators';
import {ToDo, TodosService} from './services/todos.service';
import {throwError} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  todos: ToDo[] = [];
  newToDoTitle = '';
  loading = false;
  errorText = '';
  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.fetchToDos();
  }

  addToDo() {
    // validation
    if (!this.newToDoTitle.trim()) {
      return;
    } else {
      this.loading = true;
      this.todosService.addToDo({
        completed: false,
        title: this.newToDoTitle
      })
        .subscribe(resolve => { // resolve here is object which save on server (with generated id by server)
          const toDoFromServer = resolve as ToDo;
          this.todos.push(toDoFromServer);
          this.newToDoTitle = '';
          this.loading = false;
        },
          error => this.errorText = error.message);
    }
  }

  fetchToDos() { // getAll
    this.loading = true;
    // for start working that stream you need to subscribe on this stream
    this.todosService.fetchTodos()
      .subscribe(response => { // json is in response
        this.todos = response;
        this.loading = false;
      },
        error => this.errorText = error.message);
  }

  removeToDo(id: number) {
    this.loading = true;
    this.todosService.removeToDo(id)
      .subscribe(() => {
        this.todos = this.todos.filter(todo => todo.id !== id);
        this.loading = false;
      },
        error => this.errorText = error.message);
  }

  completeTodo(id: number) {
    this.loading = true;
    this.todosService.completeTodo(id)
      .subscribe(completeTodo => {
        this.todos.find(t => t.id === completeTodo.id).completed = true;
        this.loading = false;
      },
        error => this.errorText = error.message);
  }
}
