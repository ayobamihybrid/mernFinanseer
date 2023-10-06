# Finanseer

Since this project will hold both the client application and the server application there will be node modules in two different places. First run npm install from the root. From now on run this command anytime you want to install all modules again. This is a script I have defined in package.json .

In the project directory, you can run:

npm run-script dev Runs both the client app and the server app in development mode. Open http://localhost:3000 to view the client in the browser.

npm run-script client Runs just the client app in development mode. Open http://localhost:3000 to view the client in the browser.

npm run-script server Runs just the server in development mode.

npm run build Builds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance.
