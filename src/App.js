import React, {Component, Fragment} from 'react';
import './App.css';
import Container from "reactstrap/es/Container";
import Header from "./Components/Header/Header";
import {Route, Switch} from "react-router-dom";
import Quotes from "./Containers/Quotes/Quotes";

class App extends Component{
  render() {
    return(
        <Fragment>
        <Container>
            <Header/>
            <Switch>
                <Route path="/" exact component={Quotes}/>
                <Route path="/quotes/new"/>
                <Route render={() => <h1>Not found</h1>}/>
            </Switch>
        </Container>
        </Fragment>
    )
  }
}

export default App;
