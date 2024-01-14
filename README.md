# Node Typescript NPM Package Template

A simple template that lets you create and share TypeScript NPM packages.

Includes:

-   Ability to write your code with TypeScript;
-   Configuration to expose a CJS and ESM version of your package for ultimate compatibility;
-   Configuration to expose a client/browser version of your package;
-   Configuration to handle any DOM related package;
-   Configuration for the final NPM package;
-   GitHub action for testing your package;
-   `eslint` for linting;
-   `prettier` for code formatting;
-   `jest` for testing;
-   `tsx` to run any `*.ts` script files from the terminal;
-   `esbuild` for building files;
-   `tsc`(TypeScript) for type checking and types;

## Structure

-   `src/index.ts`: expose all the things you want users to access from the package;
-   `src/client.ts`: expose a client/browser version of your package;
-   `src/*`: package logic files and folders;
-   `src/*.(spec|test).ts`: test files;

**Read the [Blog Post](https://elsoncorreia.medium.com/setup-for-a-typescript-node-npm-package-project-90977401e051) About this Setup.**

## Install

```
npm install
```

## Lint & Format

_Configure your IDE or Code Editor to run this command on save._

Check format issues:

```
npm lint
```

Fix format issues:

```
npm format
```

## Build

Build everything

```
npm run build
```

This will build a CJS, ESM, and a Browser version of your package.
It will also check the format and run the tests.

Build for the browser

```
npm run build:browser
```

## Run Locally

Put the package in watch mode in you are testing your package in your computer user [npm link](https://docs.npmjs.com/cli/v10/commands/npm-link).

```
npm run local
```

## Execute a file

Execute any file with `tsx PATH/NAME_OF_THE_FILE.ts`. This is excellent for any script files you write.

```
tsx src/add-two.ts
```

## Test

```
npm test
```

### Test Coverage

```
npm run test:coverage
```

## Pack and publish

Pack your package locally to preview the content, and test it locally.

```
npm pack
```

To push public package for the first time run the command:

```
npm publish --access public
```

The `npm publish` command assumes the package is private by default. After the first time, you no longer need the `--access` flag.

Bump the version in `package.json` and publish the version to NPM.

```
npm publish
```

### Publish tagged versions

To publish beta versions you can try to mark the version in `package.json` with `-beta` (e.g: 0.3.9-beta) for example.

Then you can publish as:

```
npm publish --tag beta
```
