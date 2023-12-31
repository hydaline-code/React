import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import QuoteDisplay from './components/Quote';
import HomePage from './homepage/home';
import Header from './components/header';

function App() {
  return (

    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/quotes" element={<QuotePage />} />
        </Routes>
      </Router>
    </div>
  );
}

function CalculatorPage() {
  return (
    <div className="calculator-page">
      <h2>
        <span>Lets</span>
        <span>do</span>
        <span>some</span>
        <span>maths!</span>
      </h2>
      <Calculator />
    </div>
  );
}

function QuotePage() {
  return (
    <div className="appquotes1">
      <h3>Checkout some quotes</h3>
      <QuoteDisplay />
    </div>
  );
}

export default App;
