import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");

//  This Uses A Underling Build Process due to the use of JSX
ReactDOM.createRoot(entryPoint).render(<App />);

// This Doesn't Use Any Underlying Build Process, React Does the process on it's own
// ReactDOM.createRoot(entryPoint).render(React.createElement(App));
