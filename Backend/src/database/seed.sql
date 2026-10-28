-- Estudiantes
INSERT INTO students_example (nombre, correo) 
VALUES
    ('Carlos Ramirez', 'carlos.example@example.com'),
    ('Laura Gomez', 'laura.example@example.com'),
    ('Andres Martinez', 'andres.example@example.com');

-- Cursos
INSERT INTO courses_example (nombre, creditos) 
VALUES
    ('Bases de Datos', 3),
    ('Programacion Web', 4),
    ('Arquitectura de Software', 3);

-- Matrículas
INSERT INTO enrollments_example (estudiante_id, curso_id, fecha_matricula, nota_final)
VALUES
    (1, 1, CURRENT_DATE, 4.5),
    (1, 2, CURRENT_DATE, 4.2),
    (2, 1, CURRENT_DATE, 3.8),
    (2, 3, CURRENT_DATE, 4.6),
    (3, 2, CURRENT_DATE, 4.0);

-- Profesores
INSERT INTO teachers (nombre, correo, especialidad)
VALUES
    ('María Rodríguez', 'maria.rodriguez@universidad.edu', 'Matemáticas'),
    ('Juan Pérez', 'juan.perez@universidad.edu', 'Programación'),
    ('Ana García', 'ana.garcia@universidad.edu', 'Bases de Datos')
ON CONFLICT (correo) DO NOTHING;

-- Aulas
INSERT INTO classrooms (codigo, edificio, capacidad)
VALUES
    ('A101', 'Bloque A', 35),
    ('B202', 'Bloque B', 40),
    ('C303', 'Bloque C', 25)
ON CONFLICT (codigo) DO NOTHING;
