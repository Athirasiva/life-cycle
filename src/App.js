import './App.css';
import Example from './Components/Example';
import ExampleUnmount from './Components/ExampleUnmount';
import SecondExample from './Components/SecondExample';

function App() {
  return (
    <div className="App">
      <h1>Component Lifecycle</h1>
      {/* <Example favcol="yellow"/> */}
      {/* <SecondExample  favcol="yellow"/> */}
      <ExampleUnmount />
    </div>
  );
}

export default App;
