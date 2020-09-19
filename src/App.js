import React, { Component } from "react";
import "./App.css";
import PhoneForm from "./components/PhoneForm";
import PhoneInfoList from "./components/PhoneInfoList";

class App extends Component {
    id = 2;
    state = {
        information: [
            {
                id: 0,
                name: "홍길동",
                phone: "010-1234-1234",
            },
            {
                id: 1,
                name: "이길동",
                phone: "010-2234-1234",
            },
        ],
        keyword: "",
    };

    handleChange = (e) => {
        this.setState({
            keyword: e.target.value,
        });
    };

    handleCreate = (data) => {
        const { information } = this.state;
        this.setState({
            information: information.concat({ id: this.id++, ...data }),
        });
    };

    handleRemove = (id) => {
        const { information } = this.state;
        this.setState({
            information: information.filter((info) => info.id !== id),
        });
    };

    handleUpdate = (id, data) => {
        const { information } = this.state;
        this.setState({
            information: information.map((info) =>
                id === info.id ? { ...info, ...data } : info
            ),
        });
    };

    render() {
        const { information, keyword } = this.state;
        const filteredList = information.filter(
            (info) => info.name.indexOf(keyword) !== -1
        );
        return (
            <div className="App">
                <h2 className="title">
                    Phone Book <span className="title_color">with React</span>
                </h2>
                <PhoneForm onCreate={this.handleCreate}></PhoneForm>
                <p>
                    <input
                        placeholder="Search by Name"
                        onChange={this.handleChange}
                        value={keyword}
                    ></input>
                </p>
                <PhoneInfoList
                    data={filteredList}
                    onRemove={this.handleRemove}
                    onUpdate={this.handleUpdate}
                ></PhoneInfoList>
            </div>
        );
    }
}

export default App;
