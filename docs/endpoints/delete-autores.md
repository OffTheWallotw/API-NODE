# Endpoint: `DELETE /autores/{id}`

Permite eliminar definitivamente un autor específico.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del autor que se desea eliminar.

## Ejemplo de Solicitud
```http
DELETE /autores/1

Respuesta Exitosa (Código 200 OK)
{
  message: 'Deleted successfully' 
}

Respuestas de Errores Posibles

Código 400 Bad Request:
{
  "errno": 400,
  "error": "Bad_request",
}
