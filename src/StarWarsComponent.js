import React, {Component} from 'react';
import People from "./People";
import StarWarsService from "./StarWarsService";
import FullPeople from "./FullPeople";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";


class StarWarsComponent extends Component {

    StarWarsService = new StarWarsService();
    state = {actor: []};
    async componentDidMount() {
        let value = await this.StarWarsService.getAllPeople();
        this.setState({actor: value.results});
        console.log(value.results);

    }

    render() {
       let {actor} = this.state;
       let {match} = this.props;
        return (
            <div className='container-fluid'>
                <div className='row'>
                {
                 actor.map(value => (<People actor = {value} key={value.name}/>))
                };

                <hr/>
                <Switch>
                    <Route path={`${match.url}/:name`} render={(props)=> {
                    let {match: {url}} = props;
                        console.log(props);
                        return (<FullPeople key={url}/>);
                    }}>
                    </Route>
                </Switch>
                <hr/>
                </div>
            </div>

        );
    }
}

export default withRouter (StarWarsComponent) ;