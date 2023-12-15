# Endpoint: `PUT /autores/{id}`

Permite modificar totalmente el autor existente.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del autor que se desea modificar.

## Ejemplo de Solicitud
```http
PUT /autores/2
Content-Type: application/json

{
  "nombre": "autor 2",
}

Respuesta Exitosa (Código 200 OK)
{ message: 'Updated successfully'}

Respuestas de Errores Posibles

Código 404 Not Found:
{ 
  errno: 400, 
  error: 'Bad Request'
}
