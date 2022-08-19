import React from "react";
import { render } from "react-dom";
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom";
import { knnc_backend } from "../../declarations/knnc_backend";
import  "./components/GlobalStyle/GlobalStyle.css"
import App from './App'


const AppRoot = () => {
  return <>
    <BrowserRouter>
      <div>
        <App />
      </div>
    </BrowserRouter>
  </>
}

const container = document.querySelector(".app")
const root = createRoot(container)
root.render(<AppRoot />)
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import { BrowserRouter } from 'react-router-dom';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>,
// );

