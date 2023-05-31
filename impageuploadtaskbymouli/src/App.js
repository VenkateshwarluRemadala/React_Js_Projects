// import logo from './logo.svg';
// import './App.css';
import ImageUpload from './ImageUpload';

import { Fragment } from 'react';
import ScrollButton from './ScrollButton.js';
import { Content, Heading } from './Styles';
import DisplayDataAfterButtionClicked from './DisplayDataAfterButtionClicked';

function App() {
  return (
    <div className="App">


      <ImageUpload/>
      {/* <DisplayDataAfterButtionClicked/> */}
     

      {/* <Fragment>
      <Heading>scroll up button</Heading>
      <Content/>
      <ScrollButton />
      </Fragment> */}
    </div>
  );
}

export default App;
