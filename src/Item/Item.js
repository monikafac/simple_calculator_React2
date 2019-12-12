import React from "react";
import styles from "./Item.module.scss";




const Item =({value, submitFn})=>(
  
    <button 
    onClick={submitFn} 
    value={value}
    className={styles.listItem}
    
    >{value}</button>
    
)

export default Item