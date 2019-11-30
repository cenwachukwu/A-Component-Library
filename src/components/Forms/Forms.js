import React from "react";
import './Forms.css';
import blackemptycheckbox from './images/blackemptybox.svg';
import blackcheckbox from './images/blackcheckbox.svg';
import bluecheckbox from './images/bluecheckbox.svg';
import blueemptycheckbox from './images/blueemptybox.svg';
import Plus from './images/plus.svg';
import Minus from './images/minus.svg';
import Redeem from './images/redeem.svg';


class Forms extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: this.props.count,
            step: this.props.step,
            src: this.props.blackcheck ? blackcheckbox : bluecheckbox //check if this.prop = blackcheckbox if not, then its bluecheckbox
        }
        this.increaseCount = this.increaseCount.bind(this);
        this.decreaseCount = this.decreaseCount.bind(this);
        this.checkCheckbox = this.checkCheckbox.bind(this)
    }

    checkCheckbox(evt) {
        evt.preventDefault()
        let newSrc;
        if (this.state.src === blackcheckbox) {
            newSrc = blackemptycheckbox;
            this.setState({
                src: newSrc
            })
        }
        else if (this.state.src === bluecheckbox) {
            newSrc = blueemptycheckbox;
            this.setState({
                src: newSrc
            })
        }
        else if (this.state.src === blackemptycheckbox) {
            newSrc = blackcheckbox;
            this.setState({
                src: newSrc
            })
        }
        else if (this.state.src === blueemptycheckbox) {
            newSrc = bluecheckbox;
            this.setState({
                src: newSrc
            })
        }
    }

    increaseCount = (evt) => {
        evt.preventDefault()
        console.log(this.state.count)
        this.setState({
            count: this.state.count + this.state.step
        })
    }
    decreaseCount = (evt) => {
        evt.preventDefault()
        console.log(this.state.count)
        this.setState({
            count: this.state.count - this.state.step
        })
    }

    render() {
        let classList = ''
        let types = ['select', 'text', 'checkbox']

        if (types.includes(this.props.type)) {
            classList += ` Forms-${this.props.type}`
        }
        if (this.props.small) {
            classList += ` Forms-${this.props.type}`
        }
        if (this.props.small) {
            classList += ` Forms-text`
        }
        if (this.props.large) {
            classList += ` Forms-text`
        }
        if (this.props.inputType === "email") {
            return (
                <div>
                    <form>
                        <input type={this.props.type} className={classList} placeholder="Email"></input>
                    </form>
                </div>
            )
        }
        if (this.props.inputType === "select") {
            return (
                <div>
                    <form>
                        <select className={classList}>
                            <option value={this.props.type}>select</option>
                        </select>
                    </form>
                </div>
            )
        }
        if (this.props.bigvoucher){
            return (
                <div>
                    <form>
                        <input type={this.props.type} placeholder="Voucher code" style={{height:"30px", padding:"10px", width:"245px"}}/>
                        <button type="submit" value="RedeemButton" style={{height:"54px", backgroundColor:"#33A0FF", 
                        borderTopRightRadius:"5px", borderBottomRightRadius:"5px"}}>Redeem</button>
                    </form>
                </div>
            )
        }

        if (this.props.voucher) {
            return (
                <div>
                    <form>
                        <input type={this.props.type} placeholder="Voucher code" style={{height:"30px", padding:"5px"}}/>
                        <button type="submit" value="RedeemButton" style={{height:"44px", backgroundColor:"#33A0FF", 
                        borderTopRightRadius:"5px", borderBottomRightRadius:"5px"}}>Redeem</button>
                    </form>
                </div>
            )
        }
        if (this.props.text) {
            return (
                <div style={{ display: "flex", flexDirection: "row", margin: "0", width: "45%" }}>
                    <div>
                        <img src={this.state.src} alt="checkbox" onClick={this.checkCheckbox} />
                    </div>
                    <div style={{marginLeft:"10px"}}>
                        <p style={{marginLeft:"-3px"}}>Dont show this popup again</p>
                    </div>
                </div>

            )
        }
        if ((this.props.blackcheck || this.props.bluecheck)) {
            return (
                <div>
                    <img src={this.state.src} alt="checkbox" onClick={this.checkCheckbox} />
                </div>
            )
        }
        if (this.props.inputType === "counter") {
            let count = this.state.count
            return (
                <div style={{ display: "flex", flexDirection: "row", margin: "0", backgroundColor: "#F6F7F8", width: "6%" }}>
                    <div style={{ margin: "0 9px 0 8px" }}>
                        <img src={Minus} onClick={this.decreaseCount} />
                    </div>


                    <div style={{ margin: "5px" }}>{count}</div>

                    <div style={{ margin: "3px 8px 0px 8px" }}>
                        <img src={Plus} onClick={this.increaseCount} />
                    </div>

                </div>
            )
        }
    }
}
export default Forms;