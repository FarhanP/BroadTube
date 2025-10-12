import React from "react";
import "./App.css";
import Body from "./Components/Body";
import appStore from "./utils/appStore.js";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <div className="">
        <Provider store={appStore}>
          <Body />
        </Provider>
      </div>
    </>
  );
}

export default App;
