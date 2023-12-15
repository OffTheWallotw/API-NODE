const { connectMysql } = require('../dbconnection');

class LibrosModel
{
    static async consultar() {
        let db = await connectMysql();
        let query = db('libros');
        return await query;
    }

    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('libros').where('id_libro', id);
    }

    static async insertar(datos) {
        let db = await connectMysql();
        const result = await db('libros').insert(datos).returning('id_libro');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectMysql();
        return await db('libros').where('id_libro', id).update(campos);
    }

    static async reemplazar(id, newData) {
        let db = await connectMysql();
        newData['id_libro'] = id;
        await db('libros').where('id_libro', id).del();
        await db.insert(newData).into('libros');
        return id;
    }
    
    static async eliminar(id) {
        let db = await connectMysql();
        return await db('libros').where('id_libro', id).del();
    }
}

module.exports = LibrosModel;