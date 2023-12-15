# Endpoint: `PATCH /libros/{id}`

Permite modificar parcialmente el libro existente.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del libro que se desea modificar.

## Ejemplo de Solicitud
```http
PATCH /libros/2
Content-Type: application/json

{
  "titulo": "Romance"
}

Respuesta Exitosa (Código 200 OK)
{ 
  message: 'Successfull partial update'
}

Respuestas de Errores Posibles

Código 404 Not Found:
{ 
  errno: 400, 
  error: 'Bad Request'
}
