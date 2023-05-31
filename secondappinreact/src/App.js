import logo from './logo.svg';
import './App.css';
import Classcomponents from './components/Classcomponents';
import Classcomponenttest from './components/Classcomponenttest';
import Login from './components/Login';
import Statefunction from './components/Statefunction';
import Studentregistration from './components/Studentregistration';

function App() {
  return (
    <div className="App">
      <Classcomponents/>
      <Classcomponenttest/>
      <Login/>
      <Statefunction/>
      <Studentregistration/>
    </div>
  );
}

export default App;
