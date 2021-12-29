import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Earphones from './Pages/Earphones.component.jsx';
import Headphones from './Pages/Headphones/Headphones.component.jsx';
import Speakers from './Pages/Speakers.component.jsx';
import Navigation from './Components/Navigation/Navigation.component.jsx';
import Footer from './Components/Footer/Footer.component.jsx';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navigation />
      <Routes>
        <Route path="/home" element={<App />} />
        <Route path="/headphones" element={<Headphones />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/earphones" element={<Earphones />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
