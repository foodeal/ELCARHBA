# Elcarahba

> ### A website to sell cars built with Next.js v12, TypeScript, Mui, eslint, Redux, Redux saga, Redux toolkit and react final forms.

To run this project I will be assuming that you have all the tools to run Next.js v12 (NodeJS >= 12).

---

## Contents

- [Elcarahba](#elcarahba)
  - [Contents](#contents)
  - [Getting started](#getting-started)
  - [Available Scripts](#available-scripts)
  - [Project structure](#project-structure)
  - [Technologies used](#technologies-used)
    - [Next.js](#nextjs)
    - [Material ui](#material-ui)
    - [TypeScript](#typescript)
    - [React final forms](#react-final-forms)
    - [Redux](#redux)
    - [Redux Toolkit](#redux-toolkit)
    - [Redux Saga](#redux-saga)

---

## Getting started

Switch to the repo folder

    cd frontend-elcarhba

Install all the dependencies and the packages

    yarn install

Start the local development server

    yarn dev

Start the production server

    yarn build
then

    yarn start

You can now access the server at http://localhost:3000

---

## Available Scripts

| Script       | Description                                            |
| ------------ | ------------------------------------------------------ |
| `install`    | Installs all the needed packages and dependecies.      |
| `dev`        | Runs the app in the development mode.                  |
| `build`      | Builds the app for production to the `.next` folder.   |
| `start`      | Runs the app in the production mode.                   |
| `lint`       | Lint both your code and style with ESLint.             |

---

## Project structure
Within the download you'll find the following directories and files:

```
├── README.md
├── next-env.d.ts
├── next.config.js
├── package.json
├── pages
├── public
├── src
│   ├── assets
│   ├── core
│   │   ├── constant
│   │   ├── enums
│   │   ├── generated
│   │   ├── models
│   │   ├── services
│   │   └── utils
│   ├── modules
│   ├── shared
│   │   ├── components
│   │   ├── guard
│   │   ├── interfaces
│   │   ├── storybook
│   │   ├── theme
│   │   └── validators
│   ├── store
├── tsconfig.json
└── yarn.lock
```

---

## Technologies used

### Next.js

"Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed."

As described in their words above, Next.js is very much an all-in-one fullstack modern application building solution. It includes first class support for Typescript and React, while offering easy solutions for some of the most common requirements in a modern application like routing, API, postCSS tools, and code-splitting.

It also supports both static site generation (for lightning fast static HTML pages that can be hosted anywhere) or with managed hosting services like Vercel/AWS/etc that run a Node server and support full on-demand data loading and server-side rendered pages.

### Material ui

React components for faster and easier web development, used for the design.

### TypeScript

TypeScript is a superset of JavaScript, meaning that it contains all of the functionality of JavaScript and then some. Therefore, any program written in valid JavaScript will also run as expected in TypeScript. In fact, TypeScript compiles simply to plain JavaScript.
TypeScript offers us more control over our code via type annotations, interfaces, and classes.

### React final forms

Final Form is a Subscription-based, high performant form state management Framework can be used with VanillaJS Forms and React forms.

### Redux

Redux is a state container for JavaScript apps. It is most commonly paired with React, where it takes control of state away from React components and gives it to a centralised place called a ‘store’.

### Redux Toolkit

Redux Toolkit is a dogmatic, sequences-included toolset for well-organized redux development. Redux has developed a valued asset for handling a global React state.

### Redux Saga

Redux saga reacts as a middleware that takes over the control of you actions before reaching the reducer directly.