# Endpoint: `POST /autores`

Permite añadir información a la tabla de autores en la base de datos.

## Parámetros requeridos

Nombre del autor.

## Ejemplo de Solicitud
```http
POST /autores
Content-Type: application/json

{
        "nombre": "oscar"
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