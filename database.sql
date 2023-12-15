CREATE DATABASE IF NOT EXISTS biblioteca;

USE biblioteca;

CREATE TABLE autores (
    id_autor    INTEGER         NOT NULL    AUTO_INCREMENT,
    nombre      VARCHAR(128)    NOT NULL,
    apellidos   VARCHAR(255)    NOT NULL,
    PRIMARY KEY (id_autor)
);

CREATE TABLE editoriales (
    id_editorial    INTEGER             NOT NULL    AUTO_INCREMENT,
    nombre          VARCHAR(255)        NOT NULL,
    PRIMARY KEY     (id_editorial)
);

CREATE TABLE temas (
    id_tema         INTEGER             NOT NULL    AUTO_INCREMENT,
    nombre          VARCHAR(255)        NOT NULL,
    PRIMARY KEY     (id_tema)
);

CREATE TABLE libros (
    id_libro        INTEGER             NOT NULL    AUTO_INCREMENT,
    titulo          VARCHAR(255)        NOT NULL,
    edicion         VARCHAR(32)         NOT NULL,
    fk_id_autor     INTEGER             NOT NULL,
    fk_id_editorial INTEGER             NOT NULL,
    fk_id_tema      INTEGER             NOT NULL,
    PRIMARY KEY     (id_libro),
    FOREIGN KEY     (fk_id_autor)       REFERENCES autores(id_autor),
    FOREIGN KEY     (fk_id_editorial)   REFERENCES editoriales(id_editorial),
    FOREIGN KEY     (fk_id_tema)        REFERENCES temas(id_tema)
);

