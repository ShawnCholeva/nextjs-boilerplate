# NextJS Boilerplate

## The purpose of this project

Demo the following technologies that can be used in a NextJS application:

- Cypress

  <br>

# Getting Started

First we need to install the package dependencies by running

```
yarn
```

## Running the development server:

```
yarn dev
```

# End-to-end testing

For the e2e tests I chose to do BDD testing utilizing Cucumber.

## Running e2e tests

This command will run our e2e tests in a headless electron browser.

```
yarn test:e2e
```

## Running e2e coverage

This command will run our e2e tests in a headless electron browser and generate a code coverage report in the cypress-coverage directory.

```
yarn coverage:e2e
```
