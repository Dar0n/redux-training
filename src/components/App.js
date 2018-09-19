import React, { Component } from 'react';
import store from '../../store';
import { addArticle } from '../../store/actions';

window.store = store;
window.addArticle = addArticle;

class App extends Component {
  render() {
    return (
      <div className="App">
        <span>{}</span>
      </div>
    );
  }
}

export default App;
