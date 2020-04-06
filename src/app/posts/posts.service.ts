import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private httpClient: HttpClient) { }

  create(post): Observable<any[]> {
    // @ts-ignore
    return this.httpClient.post('', post);
  }
  fetch() {
    return this.httpClient.get<any[]>('');
  }
  remove(id: number): Observable<any> {
    return this.httpClient.delete<void>(`${id}`);
  }
}
