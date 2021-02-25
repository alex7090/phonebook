> This repository will not be updated

# Deploying the app

## The stack

The app was created using NodeJS, ReactJS and MongoDB

## Downloads

You will need to download and install the following tools (windows):
* [NodeJS](https://nodejs.org/en/download/)
* [MongoDB](https://www.mongodb.com/try/download/community)
* [Yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable)

## Building Locally

Once you have downloaded all the tools, you will need to clone the repository.
Open a first terminal at the root of the repository.
You will need to install all the dependencies to start the backend server with : 
```bash
npm install
```
Then, you can start the build the server with :
```bash
npm run start
```
If the build was succesful, it is time to build the client
To do so, enter the client folder with:
```bash
cd client/
```
You will once again need to install the dependencies with :
```bash
npm install
```
Then, start the client with :
```bash
npm run start
```
or 
```bash
yarn run start
```

The app should be running on the [localhost](http://localhost:3000/)
