import React from "react";



const Action =({value, submitFn})=>(
    <button onClick={submitFn} value={value}>{value}</button>
)

export default Action