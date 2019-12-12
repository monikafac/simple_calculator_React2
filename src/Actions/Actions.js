import React from "react";
import styles from "./Actions.module.scss"


const Action =({value, submitFn})=>(
    <button 
    onClick={submitFn} 
    value={value}
    className={styles.listAction}
    >{value}
    
    </button>
)

export default Action