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

class FullPeople extends Component{

    state = {actor: null};
    StarWarsService = new StarWarsService();

    async componentDidMount() {
        let {match:{params: {name}}} = this.props;
        let actor = await this.StarWarsService.getPeople(name);
        this.setState({actor});
    }

    render() {

        let {match: {params: {name}}} = this.props;

        let {actor} = this.state;


        return(


            <div className="card">
                {actor && (<div><img className="card-img-top" src="https://www.bloomberg.com/graphics/2015-star-wars-the-force-accounted/img/facebook.jpg"/>
                    <div className="card-body">
                        <h4 className="card-title">{name}</h4>
                        <p className="card-text">
                            {actor.gender} -{actor.eye_color}-{actor.skin_color}
                        </p>
                    </div>
                </div>
                )}
            </div>


    );
    }


}

export default withRouter (FullPeople);