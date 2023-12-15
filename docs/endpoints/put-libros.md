# Endpoint: `PUT /libros/{id}`

Permite modificar totalmente el libro existente.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del libro que se desea modificar.

## Ejemplo de Solicitud
```http
PUT /libros/2
Content-Type: application/json

{
  "nombre": "libro 2",
}

Respuesta Exitosa (Código 200 OK)
{ message: 'Updated successfully'}

Respuestas de Errores Posibles

Código 404 Not Found:
{ 
  errno: 400, 
  error: 'Bad Request'
}
