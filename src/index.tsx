// library
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
// components
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Root from "./routes/index/Root";

import { store } from "./redux";
// css
import "./index.css";

const router = createBrowserRouter([
  {
    path: "*",
    element: <App />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<Root store={store} router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
