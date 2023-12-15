# Endpoint: `POST /editoriales`

Permite añadir información a la tabla de editoriales en la base de datos.

## Parámetros requeridos

Nombre del libro.

## Ejemplo de Solicitud
```http
POST /editoriales
Content-Type: application/json

{
        "nombre": "Horror"
}
```

## Respuesta Exitosa (Código 200 OK)
```json
status: 201
message: CREATED
```

## Respuestas de Errores Posibles
- Código 400 Bad Request:

  ```json
  {
    "errno": 400,
    "error": "bad_request"
  }
  ```