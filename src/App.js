import React from 'react';
import './App.css';
import Item from "./Item/Item";
import Action from "./Actions/Actions";
import {dataItems} from "./data/dataItems";
import {dataActions} from "./data/dataActions";


class App extends React.Component {
  state={
    a_number:"",
    b_number:"",
    to_do:"",
    score:"",
  }

handleClick=(e)=>{
  e.preventDefault();
  
  if(this.state.a_number==='' && this.state.b_number===''){
    this.setState({
      a_number:e.target.value
    })
  }
    
   else if(this.state.a_number !=="" && this.state.b_number===''){
      this.setState({
        b_number:e.target.value
      })
   }


  }



  handleAction=(e)=>{
    e.preventDefault();
   
      this.setState({
        to_do:e.target.value
      })
    
  }

handleReset=(e)=>{
  e.preventDefault();
  this.setState({
    a_number:"",
    b_number:"",
    to_do:"",
    score:""
  })
}

handleCalculate=(e)=>{
  e.preventDefault();
  if(this.state.to_do ==="+"){
    this.setState({
      score: parseInt(this.state.a_number) + parseInt(this.state.b_number)
    })
  }else if(this.state.to_do==="-"){
    this.setState({
      score: parseInt(this.state.a_number) - parseInt(this.state.b_number)
    })
  }
  else if(this.state.to_do==="*"){
    this.setState({
      score: parseInt(this.state.a_number) * parseInt(this.state.b_number)
    })
  }
  else if(this.state.to_do==="/"){
    this.setState({
      score: parseInt(this.state.a_number) / parseInt(this.state.b_number)
    })
  }

}


  render(){
  return (
    <div className="App">
    
     {dataItems.map(({value})=>(
       <Item key={value}
       value={value}
       submitFn={this.handleClick}
       />
     )) 
     }

     {dataActions.map(({value})=>(
       <Action key={value}
       value={value}
       submitFn={this.handleAction}
       />
     )) 
     }


      <button onClick={this.handleCalculate}>=</button>

      <button onClick={this.handleReset}>C</button>

     <div>a rowna sie {this.state.a_number}</div> 
     <div>b rowna sie {this.state.b_number}</div> 
     <div>działanie to {this.state.to_do}</div>
     <div>wynik to {this.state.score}</div>
   
    </div>
  );
}
}
export default App;
