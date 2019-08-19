import React, { Component } from 'react';
import MyForm from './components/MyForm.js';

class App extends Component {
  submit(values) {
    console.log(values);
  }
  render(){
    return (
      <div className="App">
        <MyForm onSubmit={this.submit}/>
      </div>
    );
   }
}

export default App;
