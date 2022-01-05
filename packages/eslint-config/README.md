# `@guardian/eslint-config`

> ESLint config for Guardian JavaScript/TypeScript projects.

## Installation

```bash
yarn add -D @guardian/eslint-config
```

or

```bash
npm install --save-dev @guardian/eslint-config
```

## Usage

```js
// ESLint configuration file
{
    "extends": "@guardian/eslint-config"
}
```

```shell
$ eslint . --ext .js,.jsx # only lint js
$ eslint . --ext .ts,.tsx # only lint ts
$ eslint . --ext .js,.jsx,.ts,.tsx # lint both
```
