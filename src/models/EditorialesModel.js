const { connectMysql } = require('../dbconnection');

class EditorialesModel
{
    static async consultar() {
        let db = await connectMysql();
        let query = db('editoriales');
        return await query;
    }

    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('editoriales').where('id_editorial', id);
    }

    static async insertar(datos) {
        let db = await connectMysql();
        const result = await db('editoriales').insert(datos).returning('id_editorial');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectMysql();
        return await db('editoriales').where('id_editorial', id).update(campos);
    }

    static async reemplazar(id, newData) {
        let db = await connectMysql();
        newData['id_editorial'] = id;
        await db('editoriales').where('id_editorial', id).del();
        await db.insert(newData).into('editoriales');
        return id;
    }
    
    static async eliminar(id) {
        let db = await connectMysql();
        return await db('editoriales').where('id_editorial', id).del();
    }
}

module.exports = EditorialesModel;