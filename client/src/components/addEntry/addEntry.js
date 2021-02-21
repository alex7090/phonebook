import React from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import API from "../../utils/api";

export class addEntry extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        phoneNumber: ""
    };
    send = async () => {
        const { firstName, lastName, phoneNumber } = this.state;
        if (!firstName || firstName.length === 0) return;
        if (!lastName || lastName.length === 0) return;
        if (!phoneNumber || phoneNumber.length === 0) return;
        try {
            const { data } = await API.createEntry(firstName,lastName,phoneNumber);
            window.location = "/";
        } catch (error) {
            console.error(error);
        }
    };
    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };
    render() {
        const { firstName, lastName, phoneNumber } = this.state;
        return (
            <div className="Login">
                <FormGroup controlId="firstName" bsSize="large">
                    <FormLabel>firstName</FormLabel>
                    <FormControl
                        autoFocus
                        type="firstName"
                        value={firstName}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup controlId="lastName" bsSize="large">
                    <FormLabel>lastName</FormLabel>
                    <FormControl
                        value={lastName}
                        onChange={this.handleChange}
                        type="lastName"
                    />
                </FormGroup>
                <FormGroup controlId="phoneNumber" bsSize="large">
                    <FormLabel>phoneNumber</FormLabel>
                    <FormControl
                        value={phoneNumber}
                        onChange={this.handleChange}
                        type="phoneNumber"
                    />
                </FormGroup>
                <Button onClick={this.send} type="submit">
                    add Entry
        </Button>
            </div>
        );
    }
}