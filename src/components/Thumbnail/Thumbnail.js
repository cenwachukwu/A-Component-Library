//we treat this file like we would treat any react file. so import react component from react
//and import the thumbnail's css file 
import React, { Component } from 'react';
import './Thumbnail.css';

//we import the svgs we saved from adobe xd
import CartHeartFilled from './thumbnail-images/icons-filled.svg';
import CartHeart from './thumbnail-images/icons.svg';
import GroupedIcon from './thumbnail-images/icon-group.svg';
import Macbook from './thumbnail-images/macbook-icon.svg';
import Price from './thumbnail-images/price-icon.svg';
import Stars from './thumbnail-images/stars-icon.svg';
import { background } from '@storybook/theming';

//next we make our class component, we are making it a class b/c we would use state to make our hover component
class Thumbnail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            iconstatus: 'iconshide',  //we set state to toggle the component (i'll point this out)
            opacity: 1
        }
        this.showicons = this.showicons.bind(this)
        this.hideicons = this.hideicons.bind(this)
    }
    showicons() {
        this.setState({
            iconstatus: 'iconshow', //set-state to enable the toggle
            opacity: 0.1
        });
    }
    hideicons() {
        this.setState({
            iconstatus: 'iconshide',    //set-state to enable the toggle
            opacity: 1
        })
    }
    render() {
        if (this.props.filled) {
            return (
                <div className="mac-transparent" style={{backgroundColor: "#FAFAFB"}}>
                    <img className="macbook" src={Macbook} onMouseEnter={this.showicons} onMouseLeave={this.hideicons} 
                                style={{opacity: this.state.opacity,}}/>
                    <hr />
                    <p>Apple Macbook Pro</p>
                    <img src={Stars} />
                    <img src={Price} />
                    <img className={this.state.iconstatus} src={CartHeartFilled} />
                </div>
            )
        }
        
        return (
            <div className="mac-transparent">
                {/* here we set the img to have a function of onMouseEnter which is like the react version of hover. so when your 
                mouse touches the image, the state changes to iconshow and when it leaves the state changes to iconshide. the same thought applies 
                to opacity, only that we style opacity inline */}
                <img className="macbook" src={Macbook} onMouseEnter={this.showicons} onMouseLeave={this.hideicons} 
                        style={{opacity: this.state.opacity}}/>
                <hr />
                <p>Apple Macbook Pro</p>
                <img src={Stars} />
                <img src={Price} />
                {/* here we attach the state iconstatus to the cartheart img as the class and then we manipulate it with css. now 
                when the mouse touches the macbook image, the value of iconstatus will change to iconshow and when it does the opposite,
                it changes to iconhide.  */}
                <img className={this.state.iconstatus} src={CartHeart} />

            </div>
        )
        
    }
}

export default Thumbnail;