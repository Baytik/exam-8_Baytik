import React, {Component} from 'react';
import axiosAPI from "../../axiosAPI";
import {Button, Card, CardBody, CardTitle, Col, Row} from "reactstrap";
import {Link, NavLink} from "react-router-dom";
import {CATEGORIES} from "../../category";

class Quotes extends Component {

    state = {
        quotes: [],
    };

    removeQuote = async (id) => {
         await axiosAPI.delete('/quotes/' + id + '.json');
            this.props.history.push('/');
    };

    requestData = async () => {
        let url = '/quotes.json';
        if (this.props.match.params.name) {
            url += `?orderBy="category"&equalTo="${this.props.match.params.name}"`
        }

        const response = await axiosAPI.get(url);

        if (response) {
            this.setState({quotes: response.data})
        }
    };

    async componentDidMount() {
        this.requestData();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.name !== this.props.match.params.name) {
            return this.requestData();
        }
    }

    render() {
        return this.state.quotes && (
            <Row>
                <Col xs={3}>
                    <ul>
                        <li><NavLink to="/">All</NavLink></li>
                        {CATEGORIES.map(c => (
                            <li key={c}>
                                <NavLink to={'/categories/' + c}>{c}</NavLink>
                            </li>
                        ))}
                    </ul>
                </Col>
                <Col xs={9}>
                {Object.keys(this.state.quotes).map(id => (
                    <Card key={id}>
                        <CardBody>
                            <CardTitle>{this.state.quotes[id].author}</CardTitle>
                            <Button tag={Link} to={"/quotes/" + id}>Editor</Button>
                            <Button tag={Link} color="danger" onClick={() => this.removeQuote(id)}>Delete</Button>
                        </CardBody>
                    </Card>
                ))}
                </Col>
            </Row>
        );
    }
}

export default Quotes;