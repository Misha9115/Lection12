import React from 'react';
import './Notebook.css';


export default class NotebookS extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

    }

    add = (value) => {
        fetch('http://localhost:3001/posts', {

            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'text': value })
        });

    }

    keyPress = (e) => {
        if (e.key === "Enter" && this.state.value !== "") {
            this.add(this.state.value);
            // alert(this.state.value)
            this.setState({
                value: ''
            })
            this.props.reScreanChenge()
        }
    }

    handleInputChange = (event) => {
        this.setState({
            value: event.target.value
        })
    };
    componentDidMount() {

    }

    render() {

        return (
            <div >
                <input type="text"
                    className='post'
                    onChange={this.handleInputChange}
                    value={this.state.value}
                    onKeyDown={this.keyPress}
                    placeholder="Write your thought and click enter" />
            </div>
        );
    }
}

