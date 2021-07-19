import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import "./style.css"

class AddUserContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            gen: ""
        }
    }
    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value,
        })
        console.log(this.state);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addUser(this.state);
        this.setState({
            name: "",
            email: "",
            gen: ""
        });

    }

    render() {
        return (
            <>
            <h1 className="heading">User Form</h1>
            <Form onSubmit={this.handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                    type="Text" 
                    placeholder="Enter name" 
                    name="name" value={this.state.name} 
                    onChange={this.handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                    type="email" 
                    placeholder="Enter email" 
                    name="email" value={this.state.email} 
                    onChange={this.handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Gen</Form.Label>
                    <Form.Control 
                    type="number" 
                    placeholder="Enter gen" 
                    name="gen" 
                    value={this.state.gen} 
                    onChange={this.handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </>
        );
    }
}

export default AddUserContact;
