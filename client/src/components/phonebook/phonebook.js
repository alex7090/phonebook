import React, { Component } from 'react';
import API from "../../utils/api";
import { DataGrid } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';


export class phonebook extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isFetchingData: false,
            data: null,
            fullData: null
        };
    }

    componentDidMount() {
        this.setState({ isFetchingData: true });
        API.getEntries()
            .then((response) => {
                console.log(response);
                this.setState({ data: response.data, fullData: response.data })
            })
            .catch((error) => {
                console.error(error);
            });
    }
    onChangeHandler(e) {
        let _ = require('underscore')
        console.log(e.target.value);
        var newData = _.filter(this.state.fullData, function (obj) {
            return obj.firstName.indexOf(e.target.value) > -1 || obj.lastName.indexOf(e.target.value) > -1 || obj.phoneNumber.indexOf(e.target.value) > -1
        })
        console.log(newData)
        this.setState({
            data: newData
        })
    }

    render() {
        const columns = [
            { field: 'firstName', headerName: 'First name', flex: 1, },
            { field: 'lastName', headerName: 'Last name', flex: 1, },
            {
                field: 'phoneNumber',
                headerName: 'Phone Number', flex: 1,

            },
            {
                field: 'id', headerName: 'Action', flex: 1,
                renderCell: (params) => ( 
                    <strong>
                        <Button
                            href={'edit?'+ params.value}
                            variant="contained"
                            color="primary"
                            size="small"
                            style={{ marginLeft: 16 }}
                        >
                            Edit
                  </Button>
                    </strong>
                ),
            },
        ];
        if (!this.state.data) {
            return <p>No data</p>;
        }
        if (!this.state.isFetchingData) {
            return <p>Loading data</p>;
        }
        return (
            <div style={{ padding: '5%', width: '100%' }}>
                <input style={{ margin: '2%'}} value={this.state.input} placeholder="Filter the data" type="text" onChange={this.onChangeHandler.bind(this)} />
                <DataGrid autoHeight rows={this.state.data} columns={columns} pageSize={5} />
            </div>
        );
    }
}