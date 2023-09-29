# Prueba tecnica para desarrollo frontend Angular
En este proyecto se crea una aplicación web para mostrar información sobre misiones espaciales utilizando el API de SpaceX y presentando esta información en la interfaz de usuario. 

## Configuración del proyecto
Para ejecutar el proyecto se deben realizar los siguientes pasos:
- Abrir el proyecto en un editor de código como VSC o IDE.
- Abrir la terminal de comandos command prompt y ejecutar el siguiente comando:

```
npm install
```

Este comando permite instalar las dependencias necesarias que requiere el proyecto.

**Nota:** Para ejecutar el proyecto escribir en la terminal el siguiente comando:

```
ng s -o
```

## Versión tecnologías utilizadas

| Tecnologías        | Versión |
| :----------------: | :-----: |
| @angular/cli       | 15.1.6  |
| @angular/material  | 15.2.9  |
| Node               | 19.4.0  |
| npm                | 9.2.0   |   

## Estructura del repositorio

- node_modules: Carpeta en donde se almacenan las dependencias del proyecto.
- src: Carpeta principal del código fuente.
  - app
    - busqueda: Componente que contiene la página web para realizar búsquedas de misiones o cohetes por su nombre.
    - detalle-cohete: Componente que contiene los detalles de cada cohete.
    - detalle-mision: Componente que contiene los detalles de cada misión.
    - inicio: Componente que contiene la página inicial de la aplicación.
    - lista-cohetes: Componente que contiene la lista de cohetes.
    - misiones.service.ts: Almacena servicios utilizados en la aplicación.
- package.json: Contiene información sobre las dependencias y scripts del proyecto.
- README.md: Contiene la documentación clara y concisa del proceso de desarrollo.
