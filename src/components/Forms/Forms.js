import React from "react";
import './Forms.css';
import blackemptycheckbox from './images/blackemptybox.svg';
import blackcheckbox from './images/blackcheckbox.svg';
import bluecheckbox from './images/bluecheckbox.svg';
import blueemptycheckbox from './images/blueemptybox.svg';


class Forms extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: this.props.count,
            step: this.props.step,
            src: this.props.blackcheck?blackcheckbox:bluecheckbox //check if this.prop = blackcheckbox if not, then its bluecheckbox
        }
        this.increaseCount = this.increaseCount.bind(this);
        this.decreaseCount = this.decreaseCount.bind(this);
        this.checkCheckbox = this.checkCheckbox.bind(this)
    }

    checkCheckbox(evt){
        evt.preventDefault()
        let newSrc; 
        if(this.state.src === blackcheckbox){
            newSrc= blackemptycheckbox;
            this.setState ({
                src: newSrc
            })
        }
        else if(this.state.src === bluecheckbox){
            newSrc= blueemptycheckbox;
            this.setState ({
                src: newSrc
            })
        }
       else if(this.state.src === blackemptycheckbox){
            newSrc= blackcheckbox;
            this.setState ({
                src: newSrc
            })
        }
        else if(this.state.src === blueemptycheckbox){
            newSrc= bluecheckbox;
            this.setState ({
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
        if (this.props.small){
            classList += ` Forms-${this.props.type}`
        }
        if (this.props.small){
            classList += ` Forms-text`
        }
        if (this.props.large){
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
        if (this.props.inputType === "submit") {
            return (
                <div>
                    <form>
                        <input type={this.props.type} className={classList} placeholder="Voucher code" />
                        <input type="submit" className="RedeemButton" value="Redeeem Code"></input>
                    </form>
                </div>
            )
        }
        if((this.props.blackcheck || this.props.bluecheck)){
            return (
                <div>
                    <img src= {this.state.src}alt="checkbox" onClick= {this.checkCheckbox}/> 
                </div>
            )
        }
        if (this.props.inputType === "counter") {
            let count = this.state.count
            return (
                <div>
                    <button onClick={this.increaseCount} />
                    <div>{count}</div>
                    <button onClick={this.decreaseCount} />
                </div>
            )
        }
    }
}
export default Forms;