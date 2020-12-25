import React, {Component} from 'react';
import PlanetsComponent from "./PlanetsComponent";
import StarWarsComponent from "./StarWarsComponent";
import './App.css'
import StarshipsComponent from "./StarshipsComponent";
import StarWarsService from "./StarWarsService";
import Planets from "./Planets";
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link

} from "react-router-dom";

class App extends Component {



    render() {

        return (
            <div className='target'>
                <Router>
                <Nav>
                    <Nav.Item>
                       <Nav.Link href="/">Home</Nav.Link>
                     </Nav.Item>
                     <Nav.Item>
                       <Nav.Link href="/people">People</Nav.Link>
                     </Nav.Item>
                     <Nav.Item>
                       <Nav.Link href="/planets">Planets</Nav.Link>
                     </Nav.Item>
                    <Nav.Item>
                       <Nav.Link href="/starships">Starships</Nav.Link>
                     </Nav.Item>
                </Nav>
                    <hr/>
                    <Switch>
                        <Route path={'/people'} render={()=>{
                           return  <StarWarsComponent/>
                        }}>

                        </Route>

                        <Route path={'/planets'} render={()=> {
                            return <PlanetsComponent/>
                        }}>


                        </Route>
                        <Route path={'/starships'} render={()=> {
                            return <StarshipsComponent/>
                        }}>

                        </Route>
                    </Switch>
                    <hr/>
                </Router>

            </div>
        );
    }
}

export default App;