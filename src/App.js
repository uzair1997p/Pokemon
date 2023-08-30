import React from 'react';
//import react router dom
import {BrowserRouter as Router, Route, Routes}  from 'react-router-dom';

//import pages
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

//import Components
import SideBar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';


import { PayPalScriptProvider, usePayPalScriptReducer } from '@paypal/react-paypal-js';
const App = () => {
  const initialOptions = {
    'client-id': 'AWZfLBtr14A990_AB_Y13O7ayJzNC2-PzYlpIBGNC3OSXhymHJV8DkENpi1aeuB3Ef1p8yZdZG9tCH25',
    currency: "USD",
    intent: "capture",
  };
  return <div className='overflow-hidden'>
    <PayPalScriptProvider deferLoading={false} options={initialOptions}>
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/:id' element={<ProductDetails />} />
          </Routes>
          <SideBar />
          <Footer />
        </Router>
      
    </PayPalScriptProvider>
      
  </div>;
};

export default App;
