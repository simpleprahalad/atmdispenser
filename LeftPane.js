import React from 'react'

const h2Style = {
    textAlign : 'center'
};

const pStyle = {
    fontSize: '16px',
    marginLeft: '10px'
};

const inputBox = {
    textAlign : 'right',
    width : '90%',
    height: '15%',
    marginLeft: '15px',
    marginTop: '10px'
};

class LeftPane extends React.Component {
    constructor() {
        super()
        this.state = {
            amount : 0
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(event) {
        console.log(event.target.value)
        const {name, value} = event.target;
        this.setState({
            [name] : value
        })
    }

    handleClick() {
        this.props.callbackFromParent(this.state.amount);
    }

    render() {
        return (
            <div className="left-pane" >
                <h2 style={h2Style}> Welcome to ATM </h2>
                <p style={pStyle}> Enter the Amount </p>
                <input type="text" placeholder="enter amount" style={inputBox} onChange={this.handleChange} name="amount"/>
                <br/>
                <button className="get-money" onClick={this.handleClick}>Get Money</button>
            </div>
        )
    }
}

export default LeftPane