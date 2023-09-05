# Todos

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Exercise

1. **create a new jokes service**. 
use appConfig {apiEndpoint}/jokes as url

params should be

```ts 
params: {
  type: 'single',
}
```

2. create a profile on [rapidApi](https://rapidapi.com)
3. add your token and host to [app.config](./src/app/app.config.ts)

4. Add an interceptor, to provide these tokens automatically.

