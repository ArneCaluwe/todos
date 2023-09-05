# Todos

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Exercises: 
### Add a new paper component. This component should be standalone and can have an animation. 

1. Generate this component using angular cli
2. Declare or import the component in `app.module`
3. Add the component to `app.component`. Align correctly (proposed class: `-z-50 absolute bottom-6 right-6 scale-150`)



_example code below._


```html
<div
  class="paper w-[400px] h-[400px] rotate-45 bg-gradient-to-tr from-green-100 dark:from-blue-800 to-green-300 dark:to-slate-900 rounded-lg shadow-lg blur-sm;"
></div>
<div
  class="pen w-[450px] h-[20px] bg-white dark:bg-blue-950 absolute top-1/2 left-1/2 shadow-lg shadow-green-100 dark:shadow-slate-900 rounded-[50%]"
></div>

```

```scss
.pen {
  animation: pen 1s infinite alternate;

  @keyframes pen {
    0% {
      transform: translate(-20%, -10%) rotate3d(1, 1, 1, 25deg);
    }
    100% {
      transform: translate(-30%, -50%) rotate3d(1, 1, 1, 35deg);
    }
  }
}
```

