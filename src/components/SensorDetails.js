import React, { Component } from 'react'

import { Card, Table, Image, ButtonGroup, Button, InputGroup, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faEdit, faTrash, faStepBackward, faFastBackward, faStepForward, faFastForward, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SettingsInputAntennaIcon from '@material-ui/icons/SettingsInputAntenna';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';

export default class SensorDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sensors: [],
            devices: []
        };
    }

    render() {
        return (
            <div>
            
                <Card className={"border border-light bg-light text-black"}>
                    <Card.Body>
                        <table class="table table-borderless">
                            <thead>
                                <th></th>
                                <th></th>
                            </thead>
                            <tbody>
                                <tr>
                                   <td> <button><PictureAsPdfIcon /><Link to="sensorDetails" className="nav-link"></Link></button><div>Manual</div></td>
                                   <td><button><PictureAsPdfIcon /><Link to="sensorDetails" className="nav-link"></Link></button><div>Release Information</div></td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </Card.Body>
                </Card>



                <Card className={"border border-light bg-light text-black"}>
                    <Card.Body>
                        <table class="table table-borderless">
                            <thead>
                                <th></th>
                                <th></th>
                                <th></th>
                            </thead>
                            <tbody>
                                <tr>
                                   <td> <button><PictureAsPdfIcon /><Link to="sensorDetails" className="nav-link"></Link></button><div>Manual</div></td>
                                   <td><button><PictureAsPdfIcon /><Link to="sensorDetails" className="nav-link"></Link></button><div>Release Information</div></td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </Card.Body>
                </Card>

                <hr></hr>
            </div>


        )
    }
}
