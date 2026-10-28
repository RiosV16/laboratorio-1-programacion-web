import { Component, OnInit, inject } from '@angular/core';
import { Teacher, TeachersService } from '../../services/teachers';

@Component({
  selector: 'app-teachers',
  standalone: true,
  imports: [],
  templateUrl: './teachers.html',
  styleUrl: './teachers.scss'
})
export class TeachersComponent implements OnInit {

  private readonly teachersService = inject(TeachersService);

  teachers: Teacher[] = [];
  loading = true;
  error = '';

  ngOnInit(): void {
    this.loadTeachers();
  }

  loadTeachers(): void {
    this.loading = true;
    this.error = '';

    this.teachersService.getAllTeachers().subscribe({
      next: (data) => {
        this.teachers = data;
        this.loading = false;
      },
      error: (error) => {
        console.error(error);
        this.error = 'No se pudieron cargar los profesores.';
        this.loading = false;
      }
    });
  }
}