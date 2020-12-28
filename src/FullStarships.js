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

class FullStarships extends Component{

    state = {ship: null};
    StarWarsService = new StarWarsService();

    async componentDidMount() {
        let {match:{params: {name}}} = this.props;
        let ship = await this.StarWarsService.getStarShips(name);
        this.setState({ship});
        console.log(ship);
    }

    render() {

        let {match: {params: {name}}} = this.props;

        let {ship} = this.state;


        return(


            <div className="card">
                {ship && (<div><img className="card-img-top" src="https://www.denofgeek.com/wp-content/uploads/2016/01/millennium-falcon.jpg"/>
                    <div className="card-body">
                        <h4 className="card-title">{name}</h4>
                        <p className="card-text">
                            {ship.model}
                        </p>
                    </div>
                </div>
                )}
            </div>



    );
    }


}

export default withRouter (FullStarships);