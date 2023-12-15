# Endpoint: `DELETE /temas/{id}`

Permite eliminar definitivamente un tema específico.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del tema que se desea eliminar.

## Ejemplo de Solicitud
```http
DELETE /temas/1

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
