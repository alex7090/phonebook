import React from 'react';
import Button from '@material-ui/core/Button';
import { Redirect } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import API from "../../utils/api";

export class editEntry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetchingData: false,
            firstName: "",
            lastName: "",
            phoneNumber: "",
            redirect: false
        };
    }


    componentDidMount() {
        var _id = this.props.location.search.substring(1);
        let _ = require('underscore')
        this.setState({ isFetchingData: true });
        API.getEntries()
            .then((response) => {
                var entry = _.filter(response.data, function (obj) {
                    return obj.id.indexOf(_id) > -1
                })
                this.setState({ firstName: entry[0].firstName, lastName: entry[0].lastName, phoneNumber: entry[0].phoneNumber })
            })
            .catch((error) => {
                console.error(error);
            });
    }

    send = async () => {
        const { firstName, lastName, phoneNumber } = this.state;
        try {
            API.updateEntry(this.props.location.search.substring(1),firstName, lastName, phoneNumber).then(() => this.setState({ redirect: true }));
        } catch (error) {
            console.error(error);
        }
    };

    validate() {
        var number = this.state.phoneNumber;
        var pattern = new RegExp(/^[+]{1}[0-9]+[ ]{1}[0-9]+[ ]{1}[0-9]{6,}$/);
        if (!pattern.test(number)) {
            return false;
        } 


        return true;
    }

    mySubmitHandler = (event) => {
        const { firstName, lastName, phoneNumber } = this.state;
        if (this.validate()) {
            this.send();
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });

    };
    render() {
        if (!this.state.isFetchingData) {
            return <p>Loading data</p>;
        }
        if (this.state.redirect) {
            return <Redirect to='/' />;
        }
        return (
            <Container style={{ padding: '5%' }} component="main" maxWidth="xs">
                <Typography style={{ margin: '0 0 5% 0' }} component="h1" variant="h5">
                    Edit the selected entry
                </Typography>
                <form >
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                value={this.state.firstName}
                                onChange={this.handleChange}
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                value={this.state.lastName}
                                onChange={this.handleChange}
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                value={this.state.phoneNumber}
                                onChange={this.handleChange}
                                variant="outlined"
                                required
                                fullWidth
                                id="phoneNumber"
                                label="Phone Number"
                                name="phoneNumber"
                            />
                        </Grid>
                    </Grid>
                    <Button style={{ margin: '5% 0 0 0' }} onClick={this.mySubmitHandler} fullWidth variant="contained" color="primary"> Submit </Button>
                </form>
            </Container>
        );
    }
}