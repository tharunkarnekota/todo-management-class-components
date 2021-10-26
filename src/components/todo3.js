import React, { Component } from 'react'

export class Todo extends Component {
    constructor(props){
        super(props);
        this.state={
            title:"first todo",
            complete:false
        }
    }
    render() {
        return (
            <div>
                <div className="todo">
                    <p style={{textDecoration:this.state.complete?'line-through':''}}>{this.state.title}</p>
                    <div className="status">
                    <button className="complete">Complete</button>
                    <button className="delete">X</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Todo
