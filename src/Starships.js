import React, {Component} from 'react';
import './Planets.css';
import {
    BrowserRouter as Router,
    Swich,
    Route,
    Link,
    withRouter
} from "react-router-dom";

class Starships extends Component {
    state = {
        cls:''
    };



    render() {
        let {cls} = this.state;
        let {ship, match : {path}} = this.props;

        return (
            <div className="card col-6">
                <div className="card-body">
                    {ship.name}
                    <div><Link to={`${path}/${ship.name}`}>to full info</Link></div>
                </div>
            </div>
        );
    }
    changeColor = ()=> {
        this.setState({cls: 'planet-box'});
    }
}

export default withRouter (Starships);