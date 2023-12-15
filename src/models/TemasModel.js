const { connectMysql } = require('../dbconnection');
class TemasModel
{
    static async consultar() {
        let db = await connectMysql();
        let query = db('temas');
        return await query;
    }

    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('temas').where('id_tema', id);
    }

    static async insertar(datos) {
        let db = await connectMysql();
        const result = await db('temas').insert(datos).returning('id_tema');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectMysql();
        return await db('temas').where('id_tema', id).update(campos);
    }

    static async reemplazar(id, newData) {
        let db = await connectMysql();
        newData['id_tema'] = id;
        await db('temas').where('id_tema', id).del();
        await db.insert(newData).into('temas');
        return id;
    }
}

module.exports = TemasModel;