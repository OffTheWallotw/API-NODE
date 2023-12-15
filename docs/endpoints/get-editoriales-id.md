# Endpoint: `GET /editoriales/{id}`

Permite obtener información detallada sobre un editorial específico mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del editorial que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /editoriales/123
```

## Respuesta Exitosa (Código 200 OK)
```json
{
  "id_editorial": 123,
  "nombre": "Programación"
}
```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
    "errno": 404,
    "error": "not_found",
    "error_description": "No se encontró el editorial."
  }
  ```

- Código 500 Internal Server Error:
  ```json
  {
    "errno": 500,
    "error": "internal_error",
    "error_description": "Ocurrió un probeditorial para procesar la solicitud"
  }
  ``` 

## Notas Adicionales

- Asegurate de incluir un ID válido en la solicitud para obtener la información
  sobre un editorial en específico.
- Para consultar más detalle sobre los libros relacionados con el editorial consultar
  la documentación del endpoint [`/editoriales/{id}/libros`](./get-editoriales-id.md).