import React from 'react'
import LeftPane from './LeftPane';
import List from './List';

const h2Style = {
    textAlign : "left",
    marginLeft: "40px"
}

class RightPane extends React.Component {

    constructor() {
        super()
        this.myObj = {
            one : 0,
            two: 0,
            five : 0,
            ten : 0,
            twenty: 0,
            fifty: 0,
            hundred: 0,
            fivehundred: 0,
            twothousand: 0
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleValue = this.handleValue.bind(this)
    }

    handleClick() {
        console.log("Clicked")
        this.setState(
            {
                one: 1,
                two: 4,
                five: 0,
                ten: 7,
                twenty: 0,
                fifty: 1,
                hundred: 2,
                fivehundred: 3,
                twothousand: 2
            }
        )
    }
    handleValue() {
        console.log(this.props.value);
        this.myObj = {
            one : this.props.value,
            two: 0,
            five : 0,
            ten : 0,
            twenty: 0,
            fifty: 0,
            hundred: 0,
            fivehundred: 0,
            twothousand: 0
        }
        return this.myObj
    }

    render() {
        return (
            <div className="right-pane">
                <h2 style={h2Style}>You will get following amount </h2>
                <List count={this.handleValue()} />
            </div>
        )
    }
}

export default RightPane