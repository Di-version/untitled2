import React, {Component} from 'react';
import './Planets.css';
import {
    BrowserRouter as Router,
    Swich,
    Route,
    Link,
    withRouter
} from "react-router-dom";

class Planets extends Component {
    state = {
        cls:''
    };



    render() {
        let {cls} = this.state;
        let {planet, match : {path}} = this.props;

        return (
            <div className="card col-6">
                <div className="card-body">
                    {planet.name}
                    <div><Link to={`${path}/${planet.name}`}>to full info</Link></div>
                </div>
            </div>
        );
    }
    changeColor = ()=> {
        this.setState({cls: 'planet-box'});
    }
}

export default withRouter (Planets);