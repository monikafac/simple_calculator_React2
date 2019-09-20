import React from 'react';
import './App.css';
import Item from "./Item/Item"
import {dataItems} from "./data/dataItems";

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
  
 


   
console.log(e.target.value);
console.log(this.state.a_number);
console.log(this.state.b_number);

  }

  handleClick2=(e)=>{
    console.log("dziala");
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

  handleToDo=(e)=>{
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
    score:""
  })
}

handleCalculate=(e)=>{
  e.preventDefault();
  if(this.state.to_do ==="+"){
    this.setState({
      score: parseInt(this.state.a_number) + parseInt(this.state.b_number)
    })
    console.log(this.state.score);
  }else if(this.state.to_do==="-"){
    this.setState({
      score: parseInt(this.state.a_number) - parseInt(this.state.b_number)
    })
    console.log(this.state.score);
  }

}


  render(){
  return (
    <div className="App">
    <form>
      <button onClick={this.handleClick} value="1">1</button>
      <button onClick={this.handleClick} value="2">2</button>
      <button onClick={this.handleClick} value="3">3</button>
      <button onClick={this.handleClick} value="4">4</button>
     {dataItems.map(({value})=>(
       <Item key={value}
       value={value}
       submitFn={this.handleClick2}
       />
     )) 
     }
      <button onClick={this.handleToDo} value="+">+</button>
      <button onClick={this.handleToDo} value="-">-</button>
      <button onClick={this.handleCalculate}>=</button>

      <button onClick={this.handleReset}>C</button>

     <div>a rowna sie {this.state.a_number}</div> 
     <div>b rowna sie {this.state.b_number}</div> 
     <div>działanie to {this.state.to_do}</div>
     <div>wynik to {this.state.score}</div>
    </form>
    </div>
  );
}
}
export default App;
