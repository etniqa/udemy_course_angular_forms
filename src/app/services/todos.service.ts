import { Injectable } from '@angular/core';
import {HttpClient, HttpEventType, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, delay, map, tap} from 'rxjs/operators';

export interface ToDo {
  completed: boolean;
  title: string;
  id?: number;
}

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  constructor(private httpClient: HttpClient) { }

  addToDo(newToDo: ToDo): Observable<ToDo> {
    // @ts-ignore
    return this.httpClient.post('https://jsonplaceholder.typicode.com/todos', newToDo);
  }
  fetchTodos(): Observable<ToDo[]> {
    let params = new HttpParams();
    params = params.append('_limit', '5'); // this is real param
    params = params.append('custom', 'anything'); // this is unreal param

    // what in query is after ? mark is QUERY PARAMETER (_limit=2)
    // https://jsonplaceholder.typicode.com/todos?_limit=2
    return this.httpClient.get<ToDo[]>('https://jsonplaceholder.typicode.com/todos',
      {
        // HEADERS: will be in dev.tools -> network -> headers (this is like a metadata)
        headers: new HttpHeaders({
          myCustomHeader: Math.random().toString()
        }),
        // PARAMS: additional functionality to query
        // this is the query after adding query parameters: https://jsonplaceholder.typicode.com/todos?_limit=5&custom=anything
        params,  // is the same to params: params
        // what type we need to get (can be
        // 'events': can be multiple times during one query (for very exact controlling),
        // 'body': json array of objects, with which we works
        // 'response': (type of 'events') body with headers, status, url
        observe: 'response'
      })
      .pipe(
        // we need to map our response to body (json array of todos)
        map(response => response.body),
        // delay for seeing how works Loading... part in .html
        delay(1500),
        // you can modified your future error in this pipe
        catchError(error => {
          // here I catch error in this pipe, made some actions and THROW it back using throwError()
          console.log('error: ', error.message);
          return throwError(error);
        })
      );
  }
  removeToDo(id: number): Observable<any> {
    return this.httpClient.delete(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      observe: 'events'
    })
      .pipe(
        tap(event => {
          if (event.type === HttpEventType.Sent) { // we`re on 'sent' stage
            console.log('sent', event);
          } else if (event.type === HttpEventType.Response) {
            console.log('we have got response', event);
          }
        })
      );
  }
  completeTodo(id: number): Observable<ToDo> {
    // with put we can edit objects and there need to send only field, which is editing
    // @ts-ignore
    return this.httpClient.put(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      completed: true
    });
  }
}
