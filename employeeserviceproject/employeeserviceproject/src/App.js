import logo from './logo.svg';
import './App.css';
import AvailabilityReports from './components/DropdownArun';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Employeeservice from './components/Employeeservice';
import Try from './components/Try';

import Counter from './components/Counter';


function App() {
  return (
    <div className="App">
  
    <Navbar/>
    <Try/>
    <Counter   />
    </div>
  );
}

export default App;
