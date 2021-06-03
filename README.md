# AngularCommands

ng new myproject ==> To create Angular project

ng g c mycomp ==> To create component in angular

ng g m mymodule ==> To create a module
---------------------------------------------
We can't do in Angular

{{a=10}} ==> can't do assignment 
{{window.location.href}} ==> can't get url directly in html


## What is component?
It is a piece of code which is reusable like we make a component for registration, a component for login
a component for list rendering.
A component is same as a function which is reusable. 
A componet has four files 1)compoenet.ts, 2)component.html, 3) component.css, 4) component.spec.ts (for testing)

Example : We make a header component and a fotter component which we use through out the website


## What is module?
A module is a collection of components, services, pips and directives.

## Events In Angular
### 1 keyup ==> To Perform action whenver a Key is pressed
### 2 keyup.enter ==> To Perform action whenver a Enter Key is pressed
### 3 keyup.space ==> To Perform action whenver a Space Key is pressed 
### 4 keydown ==> To Perform action whenver a Key is released
### 4 keydown.enter ==> To Perform action whenver a Enter Key is released
### 5 keydown.space ==> To Perform action whenver a Space Key is released
### 6 blur ==> To Perform action whenver a When focus out a TextField
### 7 mouseover ==> To Perform action Whenever hover the mouse
### 8 mouseleave ==> To Perform action Whenever move out the mouse

# Blog

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.




