import React from "react";
import { storiesOf } from '@storybook/react';
import Forms from './Forms';
// import './Forms.css';

storiesOf('Forms', module)
    .add('Forms', () => <input label="Email" />)
storiesOf('Forms', module)
    .add('Primary', () => <input
        placeholder="Email"
        label="Email"
        type="text"
    />)
