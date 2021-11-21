import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals'

import { createStore } from 'redux'

import { Provider } from 'react-redux'

import rootReducer from './redux/Reducers'

import './assets/boxicons-2.0.7/css/boxicons.min.css'
import './assets/css/grid.css'
import './assets/css/theme.css'
import './assets/css/index.css'

import Layout from './components/layout/Layout'


const store = createStore(
  rootReducer
)

document.title = 'Fourcourt'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
       <Layout />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import "bootstrap/dist/js/bootstrap.min.js";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "jquery/dist/jquery.min.js";
// import "popper.js/dist/umd/popper.min.js";
// import { store } from "./redux";
// import { Provider } from "react-redux";
// ReactDOM.render(
  // <React.StrictMode>
     {/* <Provider store={store}> */}
        {/* <App /> */}
      {/* </Provider> */}
 {/* </React.StrictMode>, */}
  // document.getElementById("root")
// );
// reportWebVitals();
// 