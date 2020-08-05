import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent'
import charComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    textEntered: ''  
  };


  textChengedHandler =(event)=>{        
    this.setState({textEntered:event.target.value});
  };

  deleteCharHandler = ( index ) =>{
    const text = this.state.textEntered.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({textEntered:updatedText});
  };

  render() { 

    const charList = this.state.textEntered.split('').map((ch,index) =>{
    return <CharComponent 
     character={ch} 
     key={index} 
     clicked={()=> this.deleteCharHandler(index)}/>;
   });

    return (
      <div className="App">
        <input type="text" onChange={(event)=>this.textChengedHandler(event)} value={this.state.textEntered}></input>
        <p>{this.state.textEntered}</p>
        <ValidationComponent 
          length={this.state.textEntered.length}/>    
        {charList}    
      </div>
    );
  }
}

export default App;
