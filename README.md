# Angular 8 Résumé

> An Angular single-page résumé generator featuring [Angular 8](https://angular.io), [HttpClient](https://angular.io/guide/http),
> [JSON Server](https://github.com/typicode/json-server),
> [Testing](https://angular.io/guide/testing), [Karma](https://karma-runner.github.io/), [Jasmine](https://github.com/jasmine/jasmine), [Istanbul](https://github.com/gotwarlost/istanbul), [TypeScript 3.4.5](http://www.typescriptlang.org/), [@types](https://www.npmjs.com/~types), [TsLint](http://palantir.github.io/tslint/), [Codelyzer](https://github.com/mgechev/codelyzer), [Compodoc](https://compodoc.app/), [Font Awesome](https://fontawesome.com/), and [Normalize.css](https://necolas.github.io/normalize.css/).

This repo serves as a single-page template for anyone looking for a way to customize their résumé. Perfect for developers and creative types. Printable from a browser (currently only compatible in Chrome and Firefox, and in 8.5" x 11" paper).

## Getting Started

You'll need node and npm to run this app.

#### Installing

-   `fork` this repo, then `clone`
-   `npm install` to install all dependencies
-   `npm start` to start the JSON server in the background and the dev server in a new tab

#### Updating data (db.json)

After cloning the repo you will need to update the json file with your résumé data. I highly recommend adding the db.json file to your .gitignore unless you are ok to have this data exposed publicly.

#### Testing

`npm run test` to run unit tests.

## ToDo

-   Add additional themes with UI to update
-   Create a résumé editor UI

## Credits

Inspiration for this project came from https://github.com/mnjul/html-resume (thank you!), which is a simple, nice, HTML/CSS résumé. I wanted to convert to Angular 8 and make changes to the theme. This is essentially a complete rewrite, but maybe some HTML and CSS will resemble his project.

## Contributing

Feel free to open a Pull Request for additional themes, etc.
