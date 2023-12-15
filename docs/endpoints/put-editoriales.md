# Endpoint: `PUT /editoriales/{id}`

Permite modificar totalmente el editorial existente.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del editorial que se desea modificar.

## Ejemplo de Solicitud
```http
PUT /editoriales/2
Content-Type: application/json

{
  "nombre": "editorial 2",
}

Respuesta Exitosa (Código 200 OK)
{ message: 'Updated successfully'}

Respuestas de Errores Posibles

Código 404 Not Found:
{ 
  errno: 400, 
  error: 'Bad Request'
}
