import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

// This is the main app component
class Todos extends Component {

  //This is a JS object
  render () {
    // Loop through with map which is similar to for each
    return this.props.todos.map((todo)=> (
      <TodoItem key= {todo.id} todo={todo} markComplete= {this.props.markComplete} delTodo={this.props.delTodo}/>
    
    ));
  }      
}
//PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
}

export default Todos;