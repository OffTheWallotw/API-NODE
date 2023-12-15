# Endpoint: `GET /autores/{id}`

Permite obtener información detallada sobre un autor específico mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del autor que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /autores/123
```

## Respuesta Exitosa (Código 200 OK)
```json
{
  "id_autor": 123,
  "nombre": "Alex",
}
```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
    "errno": 404,
    "error": "not_found",
    "error_description": "No se encontró el autor."
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
  sobre un autor en específico.
- Para consultar más detalle sobre los autores relacionados con el autor consultar
  la documentación del endpoint [`/autores/{id}/autores`](./get-autores-id.md).