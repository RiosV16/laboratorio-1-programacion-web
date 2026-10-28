-- Tabla de estudiantes
CREATE TABLE IF NOT EXISTS students_example (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(150) UNIQUE NOT NULL
);

-- Tabla de cursos
CREATE TABLE IF NOT EXISTS courses_example (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    creditos INTEGER NOT NULL CHECK (creditos > 0)
);

-- Tabla intermedia para la relación N:M
CREATE TABLE IF NOT EXISTS enrollments_example (
    id SERIAL PRIMARY KEY,
    estudiante_id INTEGER NOT NULL REFERENCES students_example(id) ON DELETE CASCADE,
    curso_id INTEGER NOT NULL REFERENCES courses_example(id) ON DELETE CASCADE,
    fecha_matricula DATE NOT NULL DEFAULT CURRENT_DATE,
    nota_final NUMERIC(3, 1) CHECK (nota_final BETWEEN 0 AND 5),
    UNIQUE (estudiante_id, curso_id)
);

-- Tabla de profesores
CREATE TABLE IF NOT EXISTS teachers (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(150) UNIQUE NOT NULL,
    especialidad VARCHAR(100) NOT NULL
);

-- Tabla de aulas
CREATE TABLE IF NOT EXISTS classrooms (
    id SERIAL PRIMARY KEY,
    codigo VARCHAR(20) UNIQUE NOT NULL,
    edificio VARCHAR(100) NOT NULL,
    capacidad INTEGER NOT NULL CHECK (capacidad > 0)
);
