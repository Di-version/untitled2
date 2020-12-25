import React, {Component} from 'react';
import Planets from "./Planets";
import StarWarsService from "./StarWarsService";
import FullPlanets from "./FullPlanets";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";


class PlanetsComponent extends Component {

    StarWarsService = new StarWarsService();
    state = {planet: []};
    async componentDidMount() {
        let value = await this.StarWarsService.getPlanets();
        this.setState({planet: value.results});


    }

    render() {
       let {planet} = this.state;
       let {match} = this.props;
        return (
            <div className='container-fluid'>
                <div className='row'>
                {
                 planet.map(value => (<Planets planet = {value} key={value.name}/>))
                };

                <hr/>
                <Switch>
                    <Route path={`${match.url}/:name`} render={(props)=> {
                    let {match: {url}} = props;
                        console.log(props);
                        return (<FullPlanets key={url}/>);
                    }}>
                    </Route>
                </Switch>
                <hr/>
                </div>
            </div>

        );
    }
}

export default withRouter (PlanetsComponent) ;