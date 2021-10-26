import React, { Component } from 'react'

export class TodoForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             todotext:""
        }
    }
    

    addTodo = (e) =>{
        e.preventDefault();
        this.props.addTodo(this.state.todotext);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.addTodo}>
                    <input typr="text" value={this.state.todotext} onChange={(e)=>this.setState({todotext:e.target.value})} placeholder="Add your todo..." />
                </form>
            </div>
        )
    }
}

export default TodoForm
