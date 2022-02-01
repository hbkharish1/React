import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
export * from './Actions/userActions'
// import ThemeContext from "./Components/ThemeContextProvider";
// import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
    // <ThemeContext.Provider value={"Day"}></ThemeContext.Provider>
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);

// serviceWorker.unregister();