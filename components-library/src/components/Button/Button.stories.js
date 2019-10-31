import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';
import './Button.css'

storiesOf('Button', module)
    .add('Primary', () => <Button label="Primary" />)

    storiesOf('Button', module)
    .add('Primary', () => <Button
        label="Do Something"
        type="primary"
    />)
    .add('Primary Hover', () => <Button
        label="Do Something"
        type="primary"
        hover
    />)
    .add('Primary Outline', () => <Button
        label="Do Something"
        type="Prioutline"
    />)
    // .add('Primary Outline', () => <Button
    //     label="Do Something"
    //     type="outline"
    //     fill
    // />)
    .add('Danger', () => <Button 
        label="Do Something"
        type="danger"
    />)
    .add('Danger Hover', () => <Button 
        label="Do Something"
        type="danger"
        hover
    />)
    .add('Danger Outline', () => <Button
        label="Do Something"
        type="danoutline"
    />)
    .add('Success', () => <Button 
        label="Do Something"
        type="success"
    />)
    .add('Success Hover', () => <Button 
        label="Do Something"
        type="success"
        hover
    />)
    .add('Warning', () => <Button 
        label="Do Something"
        type="warning"
    />)
    .add('Warning Hover', () => <Button 
        label="Do Something"
        type="warning"
        hover
    />)
    .add('Default', () => <Button
        label="Do Something"
        type="default"
    />)
    .add('Default Hover', () => <Button
        label="Do Something"
        type="default"
        hover
    />)
    .add('Large Primary', () => <Button 
        label="Large"
        type="primary"
        large
    />)
    .add('Large Success', () => <Button
        label="Large Success"
        type="success"
        large
    />)
    