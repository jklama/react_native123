import React from "react";
import { Router, Scene } from "react-native-router-flux";
import LoginScreen from "./app/Screen/Login";
import Home from "./app/index"; // Assuming index.js is your main file

const App = () => {
  // Wrap the rendering logic in a try-catch block to catch errors
  try {
    return (
      <Router>
        <Scene key="root">
          <Scene key="login" component={LoginScreen} title="Login" initial />
          <Scene key="index" component={Home} title="index" />
        </Scene>
      </Router>
    );
  } catch (error) {
    // Log any errors that occur during rendering
    console.error("Error rendering App:", error);
    // Return null or a fallback component if an error occurs
    return null;
  }
};

export default App;
