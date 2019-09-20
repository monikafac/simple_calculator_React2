import React from "react";



const Item =({value, submitFn})=>(
    <button onClick={submitFn} value={value}>{value}</button>
)

export default Item