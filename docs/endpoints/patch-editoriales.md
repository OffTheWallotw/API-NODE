# Endpoint: `PATCH /editoriales/{id}`

Permite modificar parcialmente el editorial existente.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del editorial que se desea modificar.

## Ejemplo de Solicitud
```http
PATCH /editoriales/2
Content-Type: application/json

{
  "nombre": "Romance",
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
