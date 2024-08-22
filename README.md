"@nestia/core": "^3.11.1",
"@nestia/e2e": "^0.7.0",
"@nestia/fetcher": "^3.11.1",
"@nestjs/common": "^10.0.0",
"@nestjs/core": "^10.0.0",
"@nestjs/platform-express": "^10.0.0",
"reflect-metadata": "^0.2.0",
"rxjs": "^7.8.1",
"typia": "^6.9.0"

config:

```
  input: {
    include: ['./src/**/*.controller.ts'],
  }
```

result:

```
$ npm run build-sdk

> nesita-error-message@0.0.1 build-sdk
> nestia sdk

-----------------------------------------------------------
 Nestia SDK Generator
-----------------------------------------------------------
```

```
$ npm run build-swagger

> nestia-error-message@0.0.1 build-swagger
> nestia swagger

-----------------------------------------------------------
 Nestia Swagger Generator
-----------------------------------------------------------
```
