# Endpoint: `GET /temas`

Permite recuperar la lista de todos los temas registrados.

## Ejemplo de Solicitud
```http
GET /temas

Respuesta Exitosa (Código 200 OK)
[
  {
    "id-temas": 1,
    "nombre": "Tema 1"
  },
]

Respuestas de Errores Posibles
Código 500 Internal Server Error:
{
  "errno": 500,
  "error": "internal_error",
  "error_description": "Ocurrió un problema al recuperar la lista de actividades."
}