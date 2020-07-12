# Devilbox Web UI

## Installation

Please install [nvm](https://github.com/nvm-sh/nvm) beforehand.

1. clone repository
2. cd into project
3. run `nvm use`, if you get an error that the node version does not exit yet then please follow the instructions on screen (the `nvm use` is included in the installation)
4. run `npm install`

## Building

Run `npm run build` to get the production ready build, which is being put under `./build`.

If you want an ad hoc server serving the latest build then run `npm run start:build` instead - it will run the build command and then serve the application from that folder.

## Development

Run `npm run start` to get the ad hoc server running.
