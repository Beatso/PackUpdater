# [Pack Updater](https://packupdater.netlify.app/)

A tool to update the pack_format of Minecraft resource packs and data packs

## Technologies Used

-   [TypeScript](https://www.typescriptlang.org/) on the frontend and backend
-   [React](https://reactjs.org/) with [create-react-app](https://create-react-app.dev/) to power the frontend
-   [Node.js](https://nodejs.org/) to power the backend
-   [Express](https://expressjs.com/) to manage the webserver
-   [Bulma](https://bulma.io/) as a CSS framework on the site
-   [Font Awesome](https://fontawesome.com/) for icons on the site

## Contributions

| Contribution                 | Accepted |
| ---------------------------- | -------- |
| Issues (bug reports)         | ✅       |
| Issues (feature requests)    | ✅       |
| Pull Requests (bug fixes)    | ✅       |
| Pull Requests (new features) | ❌       |

## Running

Dependencies:

-   Node.js v12
-   npm

### To run client development server

```sh
cd client
npm install
npm start
```

Open http://localhost:3000/ in a browser.

### To build client for production

```sh
cd client
npm install
npm run build
cd build
```

### To run server development

```sh
cd server
npm install
npm run watch
```

Will be served on http://localhost:3100/.

### To build server for production

```sh
cd server
npm install
npm run build
```
