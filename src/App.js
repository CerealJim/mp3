import { Fragment } from 'react'

import Header from './Header.js';
import Footer from './Footer.js';
import Mp3 from './Mp3.js';
import './App.css';


function App() {
  return (
    <Fragment>
      <div className="App">
        <Header />
        <p>It's a <strong>WIP</strong></p>
        <Mp3 />
        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
