import React, {Component, Fragment} from 'react';
import './App.css';
import Container from "reactstrap/es/Container";
import Header from "./Components/Header/Header";
import Quotes from "./Containers/Quotes/Quotes";
import NewQuotes from "./Containers/NewQuotes/NewQuotes";
import EditQuote from "./Containers/EditQuote/EditQuote";
import {Route, Switch} from "react-router-dom";

class App extends Component{
  render() {
    return(
        <Fragment>
        <Container>
            <Header/>
            <Switch>
                <Route path="/" exact component={Quotes}/>
                <Route path="/categories/:name" component={Quotes}/>
                <Route path="/quotes/new" component={NewQuotes}/>
                <Route path="/quotes/:id" component={EditQuote}/>
                <Route render={() => <h1>Not found</h1>}/>
            </Switch>
        </Container>
        </Fragment>
    )
  }
}

export default App;
