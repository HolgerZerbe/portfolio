import React, {Component} from 'react';
import './App.css';
import Image from './Image';
import ArtInfo from './ArtInfo';
import CodeInfo from './CodeInfo';

class App extends Component {




  render (){
    return (
      <div className="app">
        <h1>Stimmungen von Goldener Entspannung</h1>
        <div className="main">
          <ArtInfo />
          <Image />
          <CodeInfo />
        </div>
      </div>
    );
  }
}
export default App;
