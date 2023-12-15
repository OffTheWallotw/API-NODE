[Title](delete-editoriales.md)# Endpoint: `GET /editoriales`

Permite recuperar la lista de todos los editoriales registrados.

## Ejemplo de Solicitud
```http
GET /editoriales

Respuesta Exitosa (Código 200 OK)
[
  {
    "id-editorial": 1,
    "nombre": "editorial 1",
  },
]

Respuestas de Errores Posibles
Código 500 Internal Server Error:
{
  "errno": 500,
  "error": "internal_error",
  "error_description": "Ocurrió un problema al recuperar la lista de actividades."
}