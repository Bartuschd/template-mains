# React Frontend-Template

This Project contains a React Component Template to build new components out of.<br>

React 17 is required to run this component.


## Installation

```npm install @cbh/CHANGEME```

## Usage

Make sure to rename the values named <CHANGEME> in the following files:

- package.json
- README.md



## Publish

To publish the package to npm you must be logged in to the bueltel npm registry. Use credentials from KeePass<br> 
```npm set registry http://docker.bueltel.com:4873/```
```npm login --auth-type=legacy```

----------------
## Development
This Project can be debugged locally with vite or linked to a different Project to debug.

Local Development with vite:

```npm install```
```npm run dev```
----
Link to another Project:

```npm install```
```npm link```
```npm run dev-build```

In the other Project:

```npm link @cbh/CHANGEME```
