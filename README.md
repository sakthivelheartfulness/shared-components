

# SV Shared Components

>   NPM Package Publishing from Github Workflow - POC

## Prerequisites

This project requires NodeJS (version 14 or later) and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

```sh
$ npm -v && node -v
8.12.1
v14.17.6
```

## Table of contents

- [Project Name](#project-name)
  - [Prerequisites](#prerequisites)
  - [Table of contents](#table-of-contents)
  - [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Serving the app](#serving-the-app)
    - [Running the tests](#running-the-tests)
    - [Building a distribution version](#building-a-distribution-version)
  - [components](#components)
    - [Available Components](#available-components)
      - [Options](#options)
  - [Authors](#authors)
  - [License](#license)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Installation

To install and set up the library, run:

```sh
$ npm install -S skvsharedcomponents
```

Or if you prefer using Yarn:

```sh
$ yarn add --dev skvsharedcomponents
```

## Usage

### Serving the app

```sh
$ npm start
```

### Running the tests

```sh
$ npm test
```

### Building a distribution version

```sh
$ npm run build
```

This task will create a distribution version of the project
inside your local `dist/` folder


## Components

### Available Components

```js
import {BasicButton, OutlineButton, Card } from 'skvsharedcomponents';
```

Supported options and result fields for the `Available Components` are listed below.

#### Options

`Basic Button`
```js
<BasicButton  buttonSize = "btn--wide" buttonColor = "red">Hello, User</BasicButton>
```
`Outline Button`
```js
<OutlineButton  buttonSize = "btn--wide" buttonBorderColor = "red-border">Hello, User</OutlineButton>
```

| Type | Default value |
| --- | --- |
| buttonSize | 'btn--wide', 'btn--large', 'btn--medium', 'btn--small' |
| buttonColor | 'primary', 'black', 'red' |


`Cards`

Props:

```tsx
 const card = {
    cardHeader:{
      image:"imge-url", 
      title:"title" // Eg.NEWS,Blog
    },
    cardBody:{
      date:"Date", // Eg.SEPT 23, 2022
      title:"title", // Eg.This is Title
      content:"content",
      button:"button text"
    }
  }

```
Usgae:

```tsx
<Card values={card}/>
```

## Authors

* **sakthivelheartfulness** - *Initial work* - [sakthivelheartfulness](https://github.com/sakthivelheartfulness)

See also the list of [contributors](https://github.com/sakthivelheartfulness/contributors) who participated in this project.

## License

[MIT License](https://andreasonny.mit-license.org/2019) ?? sakthivelheartfulness