import { pool } from "../../../config/database";
import { Classroom } from "../../../domain/interfaces/classroom.interface";

export class ClassroomsService {

  public async getAllClassrooms(): Promise<Classroom[]> {
    const sql = `
      SELECT id, codigo, edificio, capacidad
      FROM classrooms
      ORDER BY id;
    `;

    const result = await pool.query<Classroom>(sql);
    return result.rows;
  }

}