import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class Habitacion {
  _id: number;
  numero: number;
  tipo: string;
  estatus: string;
  orden: string;
}

@Injectable({
  providedIn: 'root'
})

export class HabitacionCrudService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  createUser(habitacion: Habitacion): Observable<any> {
    return this.httpClient.post<Habitacion>('http://localhost:5000/apih/create-habitacion', habitacion, this.httpOptions)
      .pipe(
        catchError(this.handleError<Habitacion>('Error occured'))
      );
  }

  getUser(id): Observable<Habitacion[]> {
    return this.httpClient.get<Habitacion[]>('http://localhost:5000/apih/fetch-habitacion/' + id)
      .pipe(
        tap(_ => console.log(`Habitacion fetched: ${id}`)),
        catchError(this.handleError<Habitacion[]>(`Get Habitacion id=${id}`))
      );
  }

  getUsers(): Observable<Habitacion[]> {
    return this.httpClient.get<Habitacion[]>('http://localhost:5000/apih')
      .pipe(
        tap(habitaciones => console.log('Habitacion retrieved!')),
        catchError(this.handleError<Habitacion[]>('Get Habitacion', []))
      );
  }

  updateUser(id, habitacion: Habitacion): Observable<any> {
    return this.httpClient.put('http://localhost:5000/apih/update-habitacion/' + id, habitacion, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Habitacion updated: ${id}`)),
        catchError(this.handleError<Habitacion[]>('Update Habitacion'))
      );
  }

  deleteUser(id): Observable<Habitacion[]> {
    return this.httpClient.delete<Habitacion[]>('http://localhost:5000/apih/delete-habitacion/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`User Habitacion: ${id}`)),
        catchError(this.handleError<Habitacion[]>('Delete Habitacion'))
      );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }  
  
}
