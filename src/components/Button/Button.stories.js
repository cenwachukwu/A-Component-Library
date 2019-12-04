import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';
import './Button.css';
import Heart from './hear.png';
import Cart from './cart_2.png';

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
    .add('Primary Fill', () => <Button
        label="Do Something"
        type="prifill"
    />)
    .add('Primary Fill Cart', () => <Button
        icon = {Cart}
        label="Add To Cart"
        type="prifill"
    />)
    .add('Primary Fill Favorites', () => <Button
        icon = {Heart}
        label="Add To Favorites"
        type="prifill"
    />)
    .add('Primary Fill Heart Icon', () => <Button
        icon = {Heart}
        type="prifill"
    />)
    .add('Primary Fill Cart Icon', () => <Button
        icon = {Cart}
        type="prifill"
    />)
    .add('Large Primary', () => <Button
        label="Do Something"
        type="primary"
        large
    />)
    .add('Large Primary Hover', () => <Button
        label="Do Something"
        type="primary"
        large
        hover
    />)
    .add('Large Primary Fill', () => <Button
        label="Do Something"
        type="prifill"
        large
    />)
    .add('Large Primary Outline', () => <Button
        label="Do Something"
        type="Prioutline"
        large
    />)
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
    .add('Danger Fill', () => <Button
        label="Do Something"
        type="danFill"
    />)
    .add('Large Danger', () => <Button
        label="Do Something"
        type="danger"
        large
    />)
    .add('Large Danger Hover', () => <Button
        label="Do Something"
        type="danger"
        large
        hover
    />)
    .add('Large Danger Fill', () => <Button
        label="Do Something"
        type="danFill"
        large
    />)
    .add('Large Danger Outline', () => <Button
        label="Do Something"
        type="danoutline"
        large
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
    .add('Success Outline', () => <Button
        label="Do Something"
        type="sucoutline"
    />)
    .add('Success Fill', () => <Button
        label="Do Something"
        type="sucfill"
    />)
    .add('Large Success', () => <Button
        label="Large Success"
        type="success"
        large
    />)
    .add('Large Success Hover', () => <Button
        label="Large Success"
        type="success"
        large
        hover
    />)
    .add('Large Success Fill', () => <Button
        label="Do Something"
        type="sucfill"
        large
    />)
    .add('Large Success Outline', () => <Button
        label="Do Something"
        type="sucoutline"
        large
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
    .add('Warning Outline', () => <Button
        label="Do Something"
        type="waroutline"
    />)
    .add('Warning Fill', () => <Button
        label="Do Something"
        type="warfill"
    />)
    .add('Large Warning', () => <Button
        label="Do Something"
        type="warning"
        large
    />)
    .add('Large Warning Hover', () => <Button
        label="Do Something"
        type="warning"
        large
        hover
    />)
    .add('Large Warning Fill', () => <Button
        label="Do Something"
        type="warfill"
        large
    />)
    .add('Large Warning Outline', () => <Button
        label="Do Something"
        type="waroutline"
        large
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
    .add('Default Outline', () => <Button
        label="Do Something"
        type="deoutline"
    />)
    .add('Default Fill', () => <Button
        label="Do Something"
        type="defill"
    />)
    .add('Large Default', () => <Button
        label="Do Something"
        type="default"
        large
    />)
    .add('Large Default Hover', () => <Button
        label="Do Something"
        type="default"
        large
        hover
    />)
    .add('Large Default Fill', () => <Button
        label="Do Something"
        type="defill"
        large
    />)
    .add('Large Default Outline', () => <Button
        label="Do Something"
        type="deoutline"
        large
    />)