import React from "react";
import "./App.css";
import Body from "./Components/Body.jsx";
import appStore from "./utils/appStore.js";
import { Provider } from "react-redux";
import Footer from "./Components/Footer.jsx";

function App() {
  return (
    <>
      <div>
        <Provider store={appStore}>
          <Body />
          <Footer />
        </Provider>
      </div>
    </>
  );
}

export default App;
