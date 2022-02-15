import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from "react-router-dom" 
import TodoContainer from './components/todoContainer';
import './app.css'

ReactDom.render(
  <React.StrictMode>
    <BrowserRouter>
    <TodoContainer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
