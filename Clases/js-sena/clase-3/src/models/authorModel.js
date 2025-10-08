import { pool } from "../config/database";

export class AuthorModel {
    static async getAll() {
        try {
            const [rows] = await pool.query('SELECT * from authors');
            return rows;
        } catch (error) {
            console.error('Error al obtener autores:', error);
            throw new error('No se pudieron obtener los clientes:', error);
        }
    }
}