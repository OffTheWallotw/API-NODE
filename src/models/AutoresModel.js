const { connectMysql } = require('../dbconnection');

class AutoresModel
{
    static async consultar() {
        let db = await connectMysql();
        let query = db('autores');
        return await query;
    }

    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('autores').where('id_autor', id);
    }

    static async insertar(datos) {
        let db = await connectMysql();
        const result = await db('autores').insert(datos).returning('id_autor');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectMysql();
        return await db('autores').where('id_autor', id).update(campos);
    }

    static async reemplazar(id, newData) {
        let db = await connectMysql();
        newData['id_autor'] = id;
        await db('autores').where('id_autor', id).del();
        await db.insert(newData).into('autores');
        return id;
    }
    
    static async eliminar(id) {
        let db = await connectMysql();
        return await db('autores').where('id_autor', id).del();
    }
}

module.exports = AutoresModel;