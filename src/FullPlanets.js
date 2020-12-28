import React,{Component} from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import StarWarsService from "./StarWarsService";
import './FullPeople.css'

class FullPlanets extends Component{

    state = {planet: null};
    StarWarsService = new StarWarsService();

    async componentDidMount() {
        let {match:{params: {name}}} = this.props;
        let planet = await this.StarWarsService.getPlanets(name);
        this.setState({planet});
    }

    render() {

        let {match: {params: {name}}} = this.props;

        let {planet} = this.state;


        return(


            <div className="card">
                {planet && (<div><img className="card-img-top" src="https://specials-images.forbesimg.com/imageserve/5ebc46cd11a04300060e3caa/960x0.jpg?fit=scale"/>
                    <div className="card-body">
                        <h4 className="card-title">{name}</h4>
                        <p className="card-text">
                            {planet.diameter} -{planet.climate}-{planet.terrain} -{planet.surface_water} -{planet.population}
                        </p>
                    </div>
                </div>
                )}
            </div>


    );
    }


}

export default withRouter (FullPlanets);