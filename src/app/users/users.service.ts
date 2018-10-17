import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { User } from './user';

@Injectable()
export class UsersService {

  constructor(private http: HttpClient) { }

  private usersUrl = 'http://5bbe0c9a8be32700139e3521.mockapi.io/users/';

  getUsers(): Observable<User[]> {

    return this.http.get<User[]>(`${this.usersUrl}?sortBy=createdAt&order=asc`)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError())
      );
  }

  getUser(userId: number): Observable<User> {

    const url = `${this.usersUrl}/${userId}`;
    return this.http.get<User>(url)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError())
      );
  }

  updateUser(user: User): Observable<User> {

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.usersUrl}${user.id}`;
    return this.http.put<User>(url, user, { headers: headers })
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError())
      );    
  }

  addUser(user: User): Observable<User> {

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<User>(this.usersUrl, user, {headers: headers})
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError())
      );
  }

  deleteUser(userId: number): Observable<User> {

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.usersUrl}${userId}`;
    return this.http.delete<User>(url, {headers: headers})
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError())
      );
  }

  private handleError() {

    return (err: any) => {
        
      let errorMessage: string;
  
      if(err.error instanceof ErrorEvent) {
  
        errorMessage = `An error occurred: ${err.error.message}`;
      } else {
  
        errorMessage = `Server retured code ${err.status}: ${err.body.error}`;
      }
  
      console.log(errorMessage);

      return Observable.throw(errorMessage);
    }
  }
}
