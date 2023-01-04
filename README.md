
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>


# Ejecutar en Desarrollo

1. Clonar el repositorio
2. Ejecutar
    ```
    yarn install
    ```
3. Tener instalado Nest CLI instalado
    ```
    npm i -g @nestjs/cli
    ```
4. Levantar la base de datos
    ```
    docker-compose up -d
    ```
5. Ejecutar
    ```
    yarn start:dev
    ```

6. Clonar el archivo `.env.example` y renombrarlo a `.env`

7. Configurar las variables de entorno en el archivo `.env`

8. Ejecutar
    ```
    yarn start:dev
    ```
   
9. Reconstruir la base de datos
    ```
    localhost:3000/api/v2/seed
    ```
   
## Stack usado

    MongoDB
    NestJS
