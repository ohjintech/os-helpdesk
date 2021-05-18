![Cover](https://user-images.githubusercontent.com/7276145/118707359-6b92a380-b7e8-11eb-9a6d-d1077c439a84.png)

# PuffDesk
## _A free tool to help you start on building your help desk!_

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Open-Source helpdesk, using Node.js, React, Express, PostGreSQL.

- Download
- Set up Your DB
- ✨Get Started 

## Features

- Helpdesk Tickets
- User Roles 
- Problem Resoultion Status
- Etc...

PuffDesk is a lightweight helpdesk looking to take away some setup headache.


> The overriding design goal for PuffDesk
> is to make helpdesk creation as easy
> as possible. 

## Installation

Dillinger requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
cd puffdesk
npm i
node run start
```

For production environments...

```sh
npm install --production
NODE_ENV=production node app
```


## Development

Want to contribute? Great!

PuffDesk uses Nodemon + Webpack for fast developing.
Make a change in your file and instantaneously see your updates!

Open your favorite Terminal and run these commands.

First Tab:

```sh
node app
```

Second Tab:

```sh
another command
```

(optional) Third:

```sh
third command
```

#### Building for source

For production release:

```sh
npm run build --prod
```

Generating pre-built zip archives for distribution:

```sh
npm build dist --prod
```


## License

MIT

**Free Software, Hell Yeah!**
