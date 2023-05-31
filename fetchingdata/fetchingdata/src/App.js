import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Namelist from './components/Namelist';
import ProductList from './components/ProductList';
import Customer from './components/customer';
import FunctionCustomer from './components/FunctionCustomer';

function App() {
  return (
    <div className="App">
     <h1>Hello venkatesh, welcome to React JS</h1>
     <Navbar/><br/><br/>
     <Footer/>
     <Namelist/>
     <ProductList/>
     <Customer/>
     <FunctionCustomer/>
    </div>
  );
}

export default App;
