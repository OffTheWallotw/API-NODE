# Endpoint: `GET /libros`

Permite recuperar la lista de todos los libros registrados.

## Ejemplo de Solicitud
```http
GET /api/libros

Respuesta Exitosa (Código 200 OK)
[
  {
    "id-libros": 1,
    "nombre": "Libro 1",
  },
]

Respuestas de Errores Posibles
Código 500 Internal Server Error:
{
  "errno": 500,
  "error": "internal_error",
  "error_description": "Ocurrió un problema al recuperar la lista"
}