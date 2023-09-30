import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import Store from "./redux/store";

// const root = ReactDOM.createRoot(document.getElementById('root'));

// const router = createBrowserRouter([
//   {
//     path: "/*",
//     element: <App />,
//     // errorElement: <ErrorPage />
//   },
// ]);

// root.render(
//   // <React.StrictMode>
//     <RouterProvider router={router} />
//   // </React.StrictMode>
// );

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
