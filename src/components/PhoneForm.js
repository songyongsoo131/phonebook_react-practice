import React, { Component } from "react";

class PhoneForm extends Component {
    state = {
        name: "",
        phone: "",
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
            name: "",
            phone: "",
        });
    };

    render() {
        const style = {
            margin: "10px",
        };

        const divStyle = {
            display: "inline-block",
            padding: "2px",
        };

        return (
            <div style={style}>
                <form onSubmit={this.handleSubmit}>
                    <div style={divStyle}>
                        <input
                            placeholder="Name"
                            value={this.state.value}
                            onChange={this.handleChange}
                            name="name"
                        ></input>
                    </div>
                    <div style={divStyle}>
                        <input
                            placeholder="Number"
                            value={this.state.value}
                            onChange={this.handleChange}
                            name="phone"
                        ></input>
                    </div>
                    <div style={divStyle}>
                        <button type="submit">Add</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default PhoneForm;
