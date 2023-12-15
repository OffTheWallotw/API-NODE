# Endpoint: `PUT /temas/{id}`

Permite modificar totalmente el tema existente.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del tema que se desea modificar.

## Ejemplo de Solicitud
```http
PUT /temas/2
Content-Type: application/json

{
  "nombre": "tema 2",
}

Respuesta Exitosa (Código 200 OK)
{ message: 'Updated successfully'}

Respuestas de Errores Posibles

Código 404 Not Found:
{ 
  errno: 400, 
  error: 'Bad Request'
}
