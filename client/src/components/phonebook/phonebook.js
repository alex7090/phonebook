import React, { Component } from 'react';
import { ListGroup } from "react-bootstrap";
import API from "../../utils/api";

export class phonebook extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: null
        };
    }

    componentWillMount() {
        this.renderMyData();
    }

    renderMyData() {
        API.getEntries()
            .then((response) => {
                this.setState({ data: response.data.entries })
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        console.log(this.state.data);
        return (
            <ListGroup>
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>);
    }
}