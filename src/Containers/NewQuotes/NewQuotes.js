import React, {Component} from 'react';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import axiosAPI from "../../axiosAPI";
import {CATEGORIES} from "../../category";
import Spinner from "../../Components/UI/Spinner/Spinner";

class NewQuotes extends Component {

    state = {
      author: '',
      text: '',
      category: CATEGORIES[0],
      loading: false
    };

    onChange = e => this.setState({[e.target.name]: e.target.value});

    formSubmitHandler = async (e) => {
      e.preventDefault();

      const NewQuote = {
        author: this.state.author,
        text: this.state.text,
        category: this.state.category,
      };
      this.setState({loading: true});
       await axiosAPI.post('/quotes.json', NewQuote);
        this.setState({loading: false});
        this.props.history.push('/');
    };

    render() {
        let form = (<Form onSubmit={this.formSubmitHandler}>
            <FormGroup>
                <Label for="category">Category</Label>
                <Input type="select" name="category" id="category" value={this.state.category} onChange={this.onChange}>
                    {CATEGORIES.map(k => (
                        <option key={k} value={k}>{k}</option>
                    ))}
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="author">Author</Label>
                <Input type="text" name="author" id="author" value={this.state.author} onChange={this.onChange}/>
            </FormGroup>
            <FormGroup>
                <Label for="text">Quote text</Label>
                <Input type="textarea" name="text" id="text" value={this.state.text} onChange={this.onChange}/>
            </FormGroup>
            <Button>Save</Button>
        </Form>);
        if (this.state.loading) {
            form = <Spinner/>
        }
        return (
            <div>
                <h1>Submit new quote</h1>
                {form}
            </div>
        );
    }
}

export default NewQuotes;