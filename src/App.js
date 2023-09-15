import Calculator from './components/Calculator';
import QuoteDisplay from './components/Quote';

function App() {
  return (

    <div className="App">

      <Calculator />

      <p className="appquote">
        <h3>Checkout some quotes</h3>
        <QuoteDisplay />
      </p>

    </div>
  );
}

export default App;
