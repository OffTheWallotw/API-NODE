# Endpoint: `GET /libros/{id}`

Permite obtener información detallada sobre un libro específico mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del libro que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /libros/123
```

## Respuesta Exitosa (Código 200 OK)
```json
{
  "id_libro": 123,
  "nombre": "Programación",
}
```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
    "errno": 404,
    "error": "not_found",
    "error_description": "No se encontró el libro."
  }
  ```

- Código 500 Internal Server Error:
  ```json
  {
    "errno": 500,
    "error": "internal_error",
    "error_description": "Ocurrió un problema para procesar la solicitud"
  }
  ``` 

## Notas Adicionales

- Asegurate de incluir un ID válido en la solicitud para obtener la información
  sobre un libro en específico.
- Para consultar más detalle sobre los libros relacionados con el libro consultar
  la documentación del endpoint [`/libros/{id}/libros`](./get-libros-id-libros.md).