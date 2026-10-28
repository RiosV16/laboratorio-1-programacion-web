import { Component, OnInit, inject } from '@angular/core';
import { Classroom, ClassroomsService } from '../../services/classrooms';

@Component({
  selector: 'app-classrooms',
  standalone: true,
  imports: [],
  templateUrl: './classrooms.html',
  styleUrl: './classrooms.scss'
})
export class ClassroomsComponent implements OnInit {

  private readonly classroomsService = inject(ClassroomsService);

  classrooms: Classroom[] = [];
  loading = true;
  error = '';

  ngOnInit(): void {
    this.loadClassrooms();
  }

  loadClassrooms(): void {
    this.loading = true;
    this.error = '';

    this.classroomsService.getAllClassrooms().subscribe({
      next: (data) => {
        this.classrooms = data;
        this.loading = false;
      },
      error: (error) => {
        console.error(error);
        this.error = 'No se pudieron cargar las aulas.';
        this.loading = false;
      }
    });
  }
}