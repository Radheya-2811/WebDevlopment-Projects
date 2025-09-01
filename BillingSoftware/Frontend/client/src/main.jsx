import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ReactDOM from 'react-dom';
import {BrowserRouter as BroweserRouter, Route, Routes} from "react-router-dom";



createRoot(document.getElementById('root')).render(
  <BroweserRouter>
    <App/>
  </BroweserRouter>
)
