import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './components/Navbar';
import { Footer } from './components/Footer';
import { Testimonials } from './components/Testimonials';
import { About } from './components/About';
import Statistic from './components/Statistics';
import HeadlineCards from './components/HeadlineCards';
import Features from './components/Features';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <App />
    <Footer/>
  </React.StrictMode>
);

