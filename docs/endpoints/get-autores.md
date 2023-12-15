# Endpoint: `GET /autores`

Permite recuperar la lista de todos los autores registrados.

## Ejemplo de Solicitud
```http
GET /api/autores

Respuesta Exitosa (Código 200 OK)
[
  {
    "id-autores": 1,
    "nombre": "autor 1",
  },
]

Respuestas de Errores Posibles
Código 500 Internal Server Error:
{
  "errno": 500,
  "error": "internal_error",
  "error_description": "Ocurrió un problema al recuperar la lista de actividades."
}