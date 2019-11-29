//we treat this file like we would treat any react file. so import react component from react
//and import the thumbnail's css file 
import React, { Component } from 'react';
import './Thumbnail.css';

//we import the svgs we saved from adobe xd
import CartHeartFilled from './thumbnail-images/hover-icon-filled.svg';
import CartHeart from './thumbnail-images/hover-icon.svg';
import GroupedIcon from './thumbnail-images/icon-group.svg';
import Macbook from './thumbnail-images/macbook-icon.svg';
import Price from './thumbnail-images/price-icon.svg';
import Stars from './thumbnail-images/stars-icon.svg';

//next we make our class component, we are making it a class b/c we would use state to make our hover component
class Thumbnail extends Component {
    constructor(props) {
        super(props);
        this.state= {
            iconstatus: 'iconshide'  //we set state to toggle the component (i'll point this out)
        }
        this.showicons= this.showicons.bind(this)
        this.hideicons= this.hideicons.bind(this)
    }
    showicons(){
        this.setState({
            iconstatus: 'iconshow'
        });
    }
    hideicons(){
        this.setState({
            iconstatus: 'iconshide'
        })
    }
}

export default Thumbnail;