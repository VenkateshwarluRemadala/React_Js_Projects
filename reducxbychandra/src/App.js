import { Provider } from 'react-redux';
import './App.css';
import Increment from './Increment';
import GetData from './Redux/GetData';
import { StoreCount } from './Redux/Store';

function App() {
  return (
    <div className="App">
    
      <Increment/>
      <GetData/>
    
    </div>
  );
}

export default App;
