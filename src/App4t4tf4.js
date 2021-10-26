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

  addTodo = (todo) =>{
    console.log(todo);
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
