import { pool } from "../../../config/database";
import { Teacher } from "../../../domain/interfaces/teacher.interface";

export class TeachersService {

  public async getAllTeachers(): Promise<Teacher[]> {
    const sql = `
      SELECT id, nombre, correo, especialidad
      FROM teachers
      ORDER BY id;
    `;

    const result = await pool.query<Teacher>(sql);
    return result.rows;
  }

}