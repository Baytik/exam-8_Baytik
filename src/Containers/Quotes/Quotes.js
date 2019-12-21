import React, {Component} from 'react';
import axiosAPI from "../../axiosAPI";

class Quotes extends Component {

    state = {
        quotes: [],
    };

    async componentDidMount() {
        const response = await axiosAPI.get('quotes.json');

        if (response) {
            this.setState({quotes: response.data})
        }
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default Quotes;