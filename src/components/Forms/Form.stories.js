import React from "react";
import { storiesOf } from '@storybook/react';
import Forms from './Forms';
import './Forms.css';

// storiesOf('Forms', module)
//     .add('Forms', () => <input label="Email" />)
storiesOf('Forms', module)
    .add('Primary Small', () => <Forms
        placeholder="Email"
        label="Email"
        type="text"
        inputType="email"
        small

    />)
    .add('Primary Regular', () => <Forms
        placeholder="Email"
        label="Email"
        type="text"
        inputType="email"
        regular
    />)
    .add('Primary Large', () => <Forms
        placeholder="Email"
        label="Email"
        type="text"
        inputType="email"
        large    
    />)

    .add('Select',() => <Forms
        // placeholder="select"
        label="select"
        type="select"
        inputType="select"
    />)
    .add('Select fill',() => <Forms
        placeholder="select"
        label="select"
        type="select"
        inputType="select"
    />)

    .add('Voucher',() => <Forms
        placeholder="Vouchercode"
        label="Voucher code"
        type="text"
        inputType="submit"
        
    />)
    .add('Voucher',() => <Forms
        placeholder="Vouchercode"
        label="Voucher code"
        type="text"
        inputType="submit"
        
    />)

    .add('Checkbox',() => <Forms
        placeholder=""
        type="checkbox"
        inputType="checkbox"
    />)
    .add('Checkbox blue',() => <Forms
        placeholder=""
        type="checkbox"
        inputType="checkbox"
    />)
    .add('Checkbox text',() => <Forms   //with popups
        placeholder=""
        type="checkbox"
        inputType="checkbox"
    />)
    .add('Counter', () => <Forms
        type = "count"
        inputType = "counter"
        step = "5"
    />)



