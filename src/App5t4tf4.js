import React, { Component } from 'react'
import './App.css';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       todos:[{id:1, title:"first todo",complete:false},
              {id:2, title:"second todo",complete:false},
              {id:3, title:"third todo",complete:false}]
    }
  }

  addTodo = (title) =>{
    console.log(title);
    let todos =[...this.state.todos];
    let id=todos[todos.length-1]?todos[todos.length-1]['id']+1:0;
    let newTodo = {
      id,
      title,
      complete:false
    }
    todos.push(newTodo);
    this.setState({todos});

  }
  
  render() {
    return (
      <div>
        <h1 className="heading">Todo Management Appilication</h1>
        {this.state.todos.map(todo => (
          <Todo key={todo.id} todo={todo}/>
        )
        )}
        
        <TodoForm addTodo={(todo) => this.addTodo(todo)} />
        
      </div>
    )
  }
}

export default App
