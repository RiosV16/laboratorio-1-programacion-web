import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Teacher {
  id: number;
  nombre: string;
  correo: string;
  especialidad: string;
}

@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  private readonly http = inject(HttpClient);
  private readonly apiUrl = '/api/teachers';

  getAllTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.apiUrl);
  }
}