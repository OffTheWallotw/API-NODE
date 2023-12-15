# Endpoint: `PATCH /autores/{id}`

Permite modificar parcialmente el autor existente.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del autor que se desea modificar.

## Ejemplo de Solicitud
```http
PATCH /autores/2
Content-Type: application/json

{
  "nombre": "Alex",
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
