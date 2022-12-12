About the application:

Consists of Main Page and DropDown component inside of it.

As a framework (or library in this case), React.js was used (in JS).
State management: Would be context, but since the app logic is fairly simple and DropDown component needs to be reusable: the state logic is inside of the parent component (MainPage).

For styling purposes, Styled Components were used in combination with Themes (they are used to demonstrate the easy transition from one design model to another).

For testing purposes, testing-library/react was used (JEST tests).

A fully working example is deployed and can be seen on the following link: https://app.netlify.com/sites/sparkly-bunny-1e538d/overview

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
