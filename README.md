### Start the MySQL container
```docker-compose up -d```
### Ensure docker/mysql/docker-compose.yml includes:
```services:
  mysql:
    image: mysql:8
    environment:
      MYSQL_DATABASE: "
      MYSQL_USER: ""


      MYSQL_PASSWORD: ""
      MYSQL_ROOT_PASSWORD: ""
    ports:
      - "3307:3306" ```
      ```cd backend```
```bash
$ npm install
```

## DATABASE_URL=""
 ## JWT_SECRET="your_jwt_secret"
## TMDB_API_KEY="your_tmdb_api_key"
## PORT=3222
## Compile and run the project

### npx prisma generate
## npx prisma migrate dev --name init
 ## npm run start:dev

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

# e2e tests
$ npm run test:e2e
