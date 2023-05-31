import './App.css';
import CounterClass from './components/CounterClass';
import CounterFunction from './components/CounterFunction';
import Welcome from './components/Welcome'
function App() {
  return (
    <div className="App">
       <Welcome/>
       <CounterFunction/>
       <CounterClass/>
    </div>
  );
}

export default App;
