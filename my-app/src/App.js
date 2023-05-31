import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';

function App() {
  return (
    <div className="App">
      First react App
      <Greet name = "venkat1" character = "Worst">
      <p>No one should be like above person</p>
      </Greet>
      <Greet name = "vinay12" character = "Bad">
      <p>is the second worst person in the quee</p>
      <button>clickHere</button>
      </Greet>
      <Greet name = "krishna" character = "Good"/>
    </div>
  );
}

export default App;
