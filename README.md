# Yarn installation

```bash
$ brew install yarn
```

[yarn documentation](https://yarnpkg.com/lang/en/docs/install/)

# Frontend architecture

An opinionated architecture with the following technical stack and configuration:

* nodejs v8.x
* yarn
* next.js
* react v15.6.x
* redux v3.7.x
* styled-components v2.x
* eslint v4.3.x
* eslint-config-airbnb v15.x
* express v4.15.x


The idea is to provide a base structure that enables consumers to esaily start building features and deliver a production ready package of a Single Page App.

## NOTE
This architecture is based on [nextjs](https://github.com/zeit/next.js/) framework. It also provides a simple Node server. Be sure you are already familiar with these technologies before using it.

## Getting started
To start hacking simply do:

### Installation

```bash
$ yarn install
```

### Run developer mode

```bash
$ yarn dev
```
Point browser to http://localhost:3000. This will set up the dev mode.
