import React from 'react'; //first we import react from react 
import { storiesOf } from '@storybook/react'; //then we import storybook from storybook/react
import Thumbnail from './Thumbnail'; //lastly we import our thumbail.js file

storiesOf('Thumbnail', module) //here you name the component and from my understanding you always have to call module 
    .add('Macbook-transparent', () => //you name the story you're creating and using arrow functions, you call the componet youre adding data from and add props to it
        <Thumbnail />       //you have to call the component you're adding it from
    )
    .add('Macbook-transparent', () => 
        <Thumbnail      
            fill />     //we add the fill prop to the thumbnail b/c we would use it in our 'if' statement to differenciate between each story
    )
