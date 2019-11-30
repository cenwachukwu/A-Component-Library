import React from "react";
import { storiesOf } from '@storybook/react';
import Forms from './Forms';
import './Forms.css';


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
    />)
    .add('Primary Large', () => <Forms
        placeholder="Email"
        label="Email"
        type="text"
        inputType="email"
        large
    />)

    .add('Select', () => <Forms
        // placeholder="select"
        label="select"
        type="select"
        inputType="select"
    />)
    .add('Select fill', () => <Forms
        placeholder="select"
        label="select"
        type="select"
        inputType="select"
    />)

    .add('Voucher', () => 
        <Forms
            voucher/>
    )
    .add('Voucher oher', () => 
        <Forms
            voucher
            bigvoucher/>
    )

    .add('Checkbox black', () =>
        <Forms
            blackcheck />
    )
    .add('Checkbox blue', () => 
        <Forms
            bluecheck />
    )
    .add('Checkbox text', () => 
        <Forms
            blackcheck
            text/>
    )
    .add('Counter', () => <Forms
        type="count"
        inputType="counter"
        count={0}
        step={6}
    />)



