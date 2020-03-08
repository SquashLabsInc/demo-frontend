import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  baseUri:string = 'http://18.217.89.199/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  createTask(data) : Observable <any> {
    let url = `${this.baseUri}/todo/add`;

    return this.http.post(url,data).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
    
  }

  deleteTask(id) : Observable <any> {
    let url = `${this.baseUri}/todo/${id}`;
    return Observable.create(observer => {
      this.http.delete(url, {
      }).subscribe((data : any) => {
          observer.next({tasks: data.results});
      })
    });
  }


  getAllTask() : Observable <any> {
    let url = `${this.baseUri}/todo`;
    return this.http.get(url,{}).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }

  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}


