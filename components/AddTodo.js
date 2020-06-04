import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
    // You want state value for an input field
    state = {
        title:  ''
    }
    onSubmit = (e) => {
        // Much like Vanilla JS, it will try to submit to the actual file and we want to prevent that
        e.preventDefault();
        // Call props method to pass it up
        this.props.addTodo(this.state.title);
        // Clear the fields
        this.setState({ title: '' });

    }


    // This is an example of component state
    onChange = (e) => this.setState({  [e.target.name]: e.target.value });

    render() { 
        return (
            <form onSubmit = {this.onSubmit} style={{ display: 'flex'}}>
                <input
                    type="text"
                    name="title"
                    style={{ flex: '10', padding: '5px'}}
                    placeholder=" Add Todo . . ."
                    /*
                    value={this.state.title}*/
                    // Call the onChange method
                    onChange={this.onChange}
                    />  
                    <input 
                        type="submit" 
                        value="Submit"
                        className="btn"
                        style={{ flex: '1'}}
                        />
            </form>
            
        )
    }
}

// PropTypes
AddTodo.propTypes={
    addTodo: PropTypes.func.isRequired
}

export default AddTodo;