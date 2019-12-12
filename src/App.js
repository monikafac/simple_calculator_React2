import React from 'react';
import styles from "./App.module.scss";
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
    <div className={styles.wrapper}>
       <div className={styles.listItemWrapper}>
     {dataItems.map(({value})=>(
       <Item key={value}
       value={value}
       submitFn={this.handleClick}
       className={styles.listItem}
       />
     )) 
     }
     </div>

     <div className={styles.listActionWrapper}>
     {dataActions.map(({value})=>(
       <Action key={value}
       value={value}
       submitFn={this.handleAction}
       />
     )) 
     }
      </div>

     <div className={styles.calculateReset}>
      <button onClick={this.handleCalculate}
      className={styles.calculateButton}>=</button>

      <button onClick={this.handleReset}
      className={styles.cButton}>C</button>
     </div>
     <div className={styles.scoreWrapper}>
     <div><p className={styles.firstNumber}>Pierwsza liczba to: {this.state.a_number}</p></div> 
     <div><p className={styles.secondNumber}>Druga liczba to: {this.state.b_number}</p></div> 
     <div><p className={styles.action}>Działanie to:  {this.state.to_do}</p></div>
     <div><p className={styles.score}>WYNIK:  {this.state.score}</p></div>
     </div>
    </div>
  );
}
}
export default App;
