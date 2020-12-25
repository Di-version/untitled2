import React, {Component} from 'react';
import './People.css';
import {
    BrowserRouter as Router,
    Swich,
    Route,
    Link,
    withRouter
} from "react-router-dom";

class People extends Component {
    state = {
        cls:''
    };



    render() {
        let {cls} = this.state;
        let {actor, match : {path}} = this.props;

        return (
            <div className="card col-6">
                <div className="card-body">
                    {actor.name}-{actor.gender}
                    <div><Link to={`${path}/${actor.name}`}>to full info</Link></div>
                </div>
            </div>
        );
    }
    changeColor = ()=> {
        this.setState({cls: 'actor-box'});
    }
}

export default withRouter (People);