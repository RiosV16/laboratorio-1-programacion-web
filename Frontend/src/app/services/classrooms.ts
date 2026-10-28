import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Classroom {
  id: number;
  codigo: string;
  edificio: string;
  capacidad: number;
}

@Injectable({
  providedIn: 'root'
})
export class ClassroomsService {

  private readonly http = inject(HttpClient);
  private readonly apiUrl = '/api/classrooms';

  getAllClassrooms(): Observable<Classroom[]> {
    return this.http.get<Classroom[]>(this.apiUrl);
  }
}