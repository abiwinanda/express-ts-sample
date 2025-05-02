# Sample Express App with Typescript

Simple sample app to show how to install typescript in a node express project.

## Installation

Install express and typescript

```sh
npm i express typescript
```

since we are using express then we need to install additional types declaration

```sh
npm i -D @types/express @types/node
```

Notice we install these types as dev dependencies. This is because we will eventually transpile all typescript files into js files where these types won't exists in the js land.

Additionally we could also install `nodemon` as dev dependency

```sh
npm i -D nodemon
```

Create a `tsconfig.json` file

```sh
npx tsc --init
```

## Configure tsconfig.json

Open the `tsconfig.json` file and uncomment/configure the `outDir` config

```json
...
"outDir": "./dist",
...
```

this will configure typescript to transpile ts files into the `/dist` directory.

Transpile the ts files

```sh
npx tsc
```

Check if the `/dist` folder successfully created. There should be a file called `index.js` inside it.

You can then run the app by running `node dist/index.js`

## Build Scripts to Automate Repetitive Tasks

Create script inside `package.json` to automate repetitive stuff

```json
  "scripts": {
    "build": "npx tsc",
    "start": "node dist/index.js",
    "dev": "npx tsc -w & nodemon dist/index.js"
  },
```

* `npm run build` will transpile all ts files and output the js files into `/dist` folder.
* `npm run start` will start the express server.
* `npm run dev` will start the express server and watch for any changes made in any ts files.

## Personal Notes

* In typescript land we don't use `require('...')` to import but instead we use `import ... from ...`.
* The `-w` flag in `npm tsc -w` will watch for any changes in ts files and transpile if there is any.
* The `&` in `"dev": "tsc -w & nodemon dist/index.js"` will make the commands to run concurrently.
