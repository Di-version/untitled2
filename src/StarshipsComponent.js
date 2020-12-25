import React, {Component} from 'react';
import FullStarships from "./FullStarships"
import StarWarsService from "./StarWarsService";
import Starships from "./Starships"

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";


class StarshipsComponent extends Component {

    StarWarsService = new StarWarsService();
    state = {ship: []};
    async componentDidMount() {
        let value = await this.StarWarsService.getAllStarShips();
        this.setState({ship: value.results});


    }

    render() {
       let {ship} = this.state;
       let {match} = this.props;
        return (
            <div className='container-fluid'>
                <div className='row'>
                {
                 ship.map(value => (<Starships ship = {value} key={value.name}/>))
                };

                <hr/>
                <Switch>
                    <Route path={`${match.url}/:name`} render={(props)=> {
                    let {match: {url}} = props;
                        console.log(props);
                        return (<FullStarships key={url}/>);
                    }}>
                    </Route>
                </Switch>
                <hr/>
                </div>
            </div>

        );
    }
}

export default withRouter (StarshipsComponent) ;