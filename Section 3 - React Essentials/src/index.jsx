// File where react app boots up
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");
// App component is rendered by passing jsx code in render function
// createRoot takes HTML element as input and injects react component (here app component)
ReactDOM.createRoot(entryPoint).render(<App />);
