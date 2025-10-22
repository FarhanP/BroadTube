import React from "react";
import "./App.css";
import Body from "./Components/Body.jsx";
import appStore from "./utils/appStore.js";
import { Provider } from "react-redux";
import Footer from "./Components/Footer.jsx";
import LoadingOverlay from "./Components/LoadingOveraly.jsx";

function App() {
  return (
    <>
      <div className="min-h-[calc(100svh-66px)]">
        <Provider store={appStore}>
          <Body />
        </Provider>
      </div>
    </>
  );
}

export default App;
