import {HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

// we steal request and do something with it here
export class AuthInterceptor implements HttpInterceptor {
  // this interception will be before every request to the server
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Intercept request', req);
    const cloned = req.clone({
      headers: req.headers.append('Auth', 'Some random toker')
    });
    return next.handle(cloned)
      .pipe(
        tap(event => {
          if (event.type === HttpEventType.Response) {
            console.log('Interceptor: we have got response', event);
          }
        })
      );
  }
}
