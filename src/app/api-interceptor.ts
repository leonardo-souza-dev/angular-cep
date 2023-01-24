import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
 constructor() { }
 intercept(
   req: HttpRequest<any>,
   next: HttpHandler
 ): Observable<HttpEvent<any>> {
   let requestUrl = req.url;
   if (requestUrl.indexOf('@api-x') !== -1) {
    requestUrl = requestUrl.replace('@api-x', 'https://localhost:7202');
   }
   req = req.clone({
     url: requestUrl
   });
   return next.handle(req);
 }
}