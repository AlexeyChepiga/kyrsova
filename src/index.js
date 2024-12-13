import React from 'react';
import ReactDOM from 'react-dom/client';

import './reset.css';
import './index.css';
import './mediaqueries.css'

import App from './component/header.jsx';
import SectionOne from './component/section 1/sectionOne.jsx';
import SectionTwo from './component/section 2/sectionTwo.jsx';
import Estimation from './component/estimation/estimation.jsx';
import AboutUs from './component/about us/aboutUs.jsx';
import Footer from "./component/footer/footer";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    <SectionOne/>
    <SectionTwo/>
    <Estimation/>
    <AboutUs/>
    <Footer/>
  </React.StrictMode>
);
