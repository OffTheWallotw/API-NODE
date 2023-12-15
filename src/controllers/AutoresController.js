const AutoresModel = require('../models/AutoresModel');

class Autoresontroller
{
    /**
     * Recupera una colección de valores de un recurso:
     * 
     * ```http
     *   GET /autores
     *   Accept: application/json
     * ```
     */
    static async indexGet(req, res) {
        let data = await AutoresModel.consultar();
        res.send(data);
    }

    /**
     * Recibe una petición para crear un recurso:
     * 
     * ```http
     *   POST /autores
     *   Content-Type: application/json
     *
     *   {"nombre":"Nuevo tema"}
     * ```
     */
    static async indexPost(req, res) {
        try {
            const newData = req.body;

            const insertedId = await AutoresModel.insertar(newData);

            res.status(201)
                .header('Location', `/autores/${insertedId}`)
                .send({status: 201, message: 'Created'});
        } catch (error) {
            console.error(error);
            res.status(400).send({ errno: 400, error: 'Bad Request' });
        }
    }

    /**
     * Recupera el valor de un recurso individual:
     * 
     * ```http
     *   GET /autores/{id}
     *   Accept: application/json
     * ```
     */
    static async itemGet(req, res) {
        let id = req.params.id;
        let data = await AutoresModel.consultarPorId(id);
        if (data.length == 0) {
            res.status(404).send({errno: 404, error: 'Not found'});
            return;
        }
        res.send(data[0]);
    }

    /**
     * Recibe un petición para sustituir/reemplazar un recurso:
     * 
     * ```http
     *   PUT /autores/{id}
     *   Content-Type: application/json
     *
     *   {"nombre":"Nombre del tema sustituto"}
     * ```
     * 
     * > **NOTA**  
     * > Los valores que no se reciban serán sustituidos con su valor
     * > predeterminado o vacío, según corresponda.
     */
    static async itemPut(req, res) {
        try {
            const id = req.params.id;
            const updatedData = req.body;

            const result = await AutoresModel.reemplazar(id, updatedData);

            if (result === 0) {
                res.status(404).send({ errno: 404, error: 'Not found' });
            } else {
                res.send({ message: 'Updated successfully'});
            }
        } catch (error) {
            console.error(error);
            res.status(400).send({ errno: 400, error: 'Bad Request'});
        }
    }

    /**
     * Recibe una petición para actualizar parte de un recurso:
     * 
     * ```http
     *   PATCH /autores/{id}
     *   Content-Type: application/json
     * 
     *   {"nombre": "Nuevo nombre del tema"}
     * ```
     */
    static async itemPatch(req, res) {
        try {
            const id = req.params.id;
            const updatedFields = req.body;

            const result = await AutoresModel.actualizar(id, updatedFields);

            if (result === 0) {
                res.status(404).send({ errno: 404, error: 'Not found' });
            } else {
                res.send({ message: 'Successfull partial update'});
            }
        } catch (error) {
            console.error(error);
            res.status(400).send({ errno: 400, error: 'Bad Request' });
        }
    }

    /**
     * Elimina el valor de un recurso individual:
     * 
     * ```http
     *   DELETE /autores/{id}
     *   Accept: application/json
     * ```
     */
    static async itemDelete(req, res) {
        try {
            const id = req.params.id;
    
            // Cambiar AutoresModel.reemplazar por el método de eliminación correspondiente
            const result = await AutoresModel.eliminar(id);
    
            if (result === 0) {
                res.status(404).send({ errno: 404, error: 'Not found' });
            } else {
                res.send({ message: 'Deleted successfully' });
            }
        } catch (error) {
            console.error(error);
            res.status(400).send({ errno: 400, error: 'Bad Request' });
        }
    }
    
}

module.exports = Autoresontroller;