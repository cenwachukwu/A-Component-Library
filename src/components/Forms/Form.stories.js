import React from "react";
import { storiesOf } from '@storybook/react';
import Forms from './Forms';
import './Forms.css';


storiesOf('Forms', module)
.add('Email', () => <Forms placeholder="Email" label="Email" type="text" inputType="email" little/>)
.add('Email Reg', () => <Forms placeholder="Email" label="Email" type="text" inputType="email" reg/>)
.add('Email Large', () => <Forms placeholder="Email" label="Email" type="text" inputType="email" large/>)


    .add('select', () =>
        <Forms
            type="select"
            special="select-css"
            little />
    )
    .add('select Reg', () =>
        <Forms
            type="select"
            special="select-css"
            reg />
    )
    .add('select Large', () =>
        <Forms
            type="select"
            special="select-css"
            large />
    )
    .add('select Fill', () =>
        <Forms
            type="select"
            special="select-css"
            fill
            little />
    )
    .add('select Fill Reg', () =>
        <Forms
            type="select"
            special="select-css"
            fill
            reg />
    )
    .add('select Fill Large', () =>
        <Forms
            type="select"
            special="select-css"
            fill
            large />
    )

    .add('Voucher', () =>
        <Forms
            voucher />
    )
    .add('Voucher Big', () =>
        <Forms
            voucher
            bigvoucher />
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
            text />
    )
    .add('Counter', () => <Forms
        type="count"
        inputType="counter"
        count={0}
        step={6}
    />)



