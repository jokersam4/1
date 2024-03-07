import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Login from '../src/pages/Login';
import Protected from '../src/components/Protected';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CoinSystem from './components/CoinSystem';
import Addapp from './pages/Addapp';
import FormAdd from './components/FormAdd';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>





        <Route>
          <Route path="addapp" element={<Addapp />} />
          <Route path="addappnow" element={<FormAdd />} />
        </Route>




      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
