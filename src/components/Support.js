import React, { Component } from 'react'

import { Card, Table, Image, ButtonGroup, Button, InputGroup, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faEdit, faTrash, faStepBackward, faFastBackward, faStepForward, faFastForward, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SettingsInputAntennaIcon from '@material-ui/icons/SettingsInputAntenna';
import EditIcon from '@material-ui/icons/Edit';

export default class Support extends Component {

    // state = { users: [] }

    // componentDidMount() {
    //     fetch(`https://jsonplaceholder.typicode.com/users`)
    //         .then(response => response.json())
    //         .then(users => this.setState({ users: users }))
    // }

    constructor(props) {
        super(props);
        this.state = {
            sensors: [],
            devices: []
        };
    }

    componentDidMount() {
        // axios.get("http://localhost:9000/api/devices?fields=deviceName")
        // .then(response => response.data)
        // .then((data) => {
        //     this.setState({sensors:data})
        // });

        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(response => response.json())
            .then(devices => this.setState({ devices: devices }))
    }

    render() {
        const { sensors, currentPage, totalPages, search } = this.state;
        return (
            <div>
                <div className="customers"><label className="label">Customers<select className="drop-down">{this.state.devices.map(device => <option value="device.value">{device.email}</option>)}</select></label></div>
                <br></br><br></br>
                <hr></hr>
                <Card className={"border border-light bg-light text-black"}>
                    <Card.Body>
                        <table class="table table-borderless">
                            <thead>
                                <th></th>
                                <th></th>
                                <th></th>
                            </thead>
                            <tbody>
                                {/* {
                                    sensors.length === 0 ?
                                    <tr align="center">
                                      <td colSpan="7">No Sensors Available.</td>
                                    </tr> :
                                    sensors.map((sensor) => (
                                    <tr key={sensor.id}>
                                        <td>
                                            <Image src={sensor.coverPhotoURL} roundedCircle width="25" height="25"/> {sensor.title}
                                        </td>
                                        <td>{sensor.author}</td>
                                        <td>{sensor.isbnNumber}</td>
                                        <td>
                                            <ButtonGroup>
                                                <Link to={"edit/"+sensor.id} className="btn btn-sm btn-outline-primary"><FontAwesomeIcon icon={faEdit} /></Link>{' '}
                                            </ButtonGroup>
                                        </td>
                                    </tr>
                                    ))
                                } */}
                                <tr>

                                <td><ButtonGroup>
                                        <li>
                                            <i class="btn btn-sm btn-outline-primary"></i><FontAwesomeIcon icon={faEdit} /> <Link to="supportDetails" className="nav-link"></Link>
                                        </li>
                                    </ButtonGroup></td>
                                </tr>
                                <tr>
                                    <td><SettingsInputAntennaIcon />eazense_38FDFEB80FCD</td>
                                    <td><button className="online" disabled>Online</button></td>
                                    <td><button><EditIcon /><Link to="sensorDetails" className="nav-link"></Link></button></td>
                                </tr>
                            </tbody>
                        </table>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
