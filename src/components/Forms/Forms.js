import React from "react";
import './Forms.css';
// import { ReactComponent } from "*.svg";

const Forms = (props) => {
    let classList = ''
    let types = ['defill']
    if (types.includes(props.type)){
        classList += ` Forms-${props.type}`
    }
    return <input className={classList}>
    {props.label}
    </input>
}
export default Forms;