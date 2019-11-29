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
import Beats from './thumbnail-images/beats-icon.svg';

//next we make our class component, we are making it a class b/c we would use state to make our hover component
class Thumbnail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            iconstatus: 'iconshide',  //we set state to toggle the component (i'll point this out)
            opacity: 1,
            backgroundColor: "#FFFFFF"
        }
        this.showicons = this.showicons.bind(this)
        this.hideicons = this.hideicons.bind(this)
        this.havebackgroundColor = this.havebackgroundColor.bind(this)
        this.removebackgroundColor = this.removebackgroundColor.bind(this)
    }
    havebackgroundColor() {
        this.setState({
            backgroundColor: "#FAFAFB" //set-state to enable backgroundColor toggle in <div className="mac-transparent-row">
        });
    }

    removebackgroundColor() {
        this.setState({
            backgroundColor: "#FFFFFF"  //set-state to enable backgroundColor toggle in <div className="mac-transparent-row">
        });
    }

    showicons() {
        this.setState({
            iconstatus: 'iconshow', //set-state to enable toggle in <div className="mac-transparent">
            opacity: 0.1
        });
    }
    hideicons() {
        this.setState({
            iconstatus: 'iconshide',    //set-state to enable toggle in <div className="mac-transparent">
            opacity: 1
        })
    }
    render() {
        if (this.props.beats) {
            return (
                <div className="mac-transparent-row" style={{ width: "30%" }}>
                    <div style={{ margin: "0 0 0 20px" }}>
                        <img src={Beats} />
                    </div>
                    <div className="info" style={{ width: "180px"}}>
                        <p style={{ margin: "0 5px 0 0px" }}>Beats solo 2 on Ear Headphones - Black</p>
                        <img src={Stars} style={{ margin: "0 60px 0 0" }}/>
                        <img src={Price} style={{ margin: "0 50px 0 0" }}/>
                        <img className={this.state.iconstatus} src={CartHeartFilled} />
                    </div>

                </div>
            )
        }

        if (this.props.row) {
            return (
                <div className="mac-transparent-row" style={{ backgroundColor: this.state.backgroundColor }}
                    onMouseEnter={this.havebackgroundColor} onMouseLeave={this.removebackgroundColor}>
                    <div>
                        <img className="macbook" src={Macbook} />
                    </div>
                    <div className="info">
                        <p style={{ margin: "0 0 0 50px" }}>Apple Macbook Pro</p>
                        <img src={Stars} />
                        <img src={Price} />
                        <img className={this.state.iconstatus} src={CartHeartFilled} />
                    </div>

                </div>
            )
        }

        if (this.props.filled) {
            // using inline styling for the works best to style specific components instead of styling it in css 
            return (
                <div className="mac-transparent" style={{ backgroundColor: "#FAFAFB" }}>
                    <img className="macbook" src={Macbook} onMouseEnter={this.showicons} onMouseLeave={this.hideicons}
                        style={{ opacity: this.state.opacity, }} />
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
                    style={{ opacity: this.state.opacity }} />
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