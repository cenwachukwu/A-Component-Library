import React from "react";
import './Forms.css';
// import { ReactComponent } from "*.svg";

class Forms extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: this.props.count,
            step: this.props.step,
        }
        this.increaseCount = this.increaseCount.bind(this);
        this.decreaseCount = this.decreaseCount.bind(this);
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
                        <select name={this.props.type} className={classList}>
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
                        <input type="submit" value="Redeeem Code"></input>
                    </form>
                </div>
            )
        }
        if (this.props.inputType === "checkbox") {
            return (
                <div>
                    <input type={this.props.type} className={classList} />
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