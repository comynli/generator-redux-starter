## Yeoman generator for Redux and React
fork and Modify from [banderson/generator-redux](https://github.com/banderson/generator-redux), thanks very much


### Features include in this Generator:
- [x] Redux functional application architecture
- [x] [React-router](https://github.com/reactjs/react-router) A complete routing solution for React.js
- [x] [Redux-DevTools](https://github.com/gaearon/redux-devtools) configured and enabled when in dev mode
- [x] [WebPack](http://webpack.github.io/) for build pipeline and dev server awesomeness
- [x] [Babel](https://babeljs.io/) transpiler so you can use [bleeding edge language features](https://babeljs.io/docs/usage/experimental/)
- [x] PostCSS preprocessor with autoprefixer support

### Prerequisites

You must have [Node.js w/NPM](http://nodejs.org/) installed. I recommend installing via [homebrew](http://brew.sh/), but you should be able to use the [pre-built installers](http://nodejs.org/download/) if you prefer.

Also, `generator-redux-starter` is a [Yeoman](http://yeoman.io/) generator. If you do not have Yeoman installed, first run:

```bash
$ npm install -g yo
```

### Installing the generator

To install generator-redux from npm, run:

```bash
$ npm install -g generator-redux-starter
```

Finally, initiate the generator:

```bash
$ yo redux-starter
```


### Configuration Options

During install-time, you will be prompted to enter some information to help create the project structure and `package.json` file:

* __Application name__ (_string_): A human-readable name for your project, i.e. "My Redux Application"
* __Application Description__ (_string_): Describe your application in one sentence, to be used in `package.json` and the generated `README.md`
* __Port__ (number): choose a port to run your development server on (defaults to :**3000**)


### Running your scaffolded project

The generated project includes a hot-reloading static server. To start the server, run:

```bash
$ npm start
```

To run the server with the dev-tools enabled, run:

```bash
$ DEBUG=true npm start
```

To build for production, run:

```bash
$ npm run build
```


## License

MIT
