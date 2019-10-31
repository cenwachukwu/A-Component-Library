import React from 'react';
import './Button.css';
import Heart from './App.test.png';
import Cart from './cart_2.png';

// This is a functional component - just sent up a little differently as an arrow function!
const Button = (props) => {
    let classList = ''
    let types = ['primary', 'danger', 'success','warning','default','Prioutline','danoutline',
                'sucoutline','deoutline','waroutline','prifill','danFill','sucfill','warfill','defill']
    if (types.includes(props.type)){
        classList += ` button-${props.type}`
    }
    if (props.large) {
        classList += ` button-large`
    }
    if (props.hover){
        classList += ` button-hover`
    }
    if (props.icon){
        classList += ` button-primary`
    }
    return <button className={classList}>
        <img src = {props.icon}/>
        {props.label}
    </button>
}

export default Button;