import React, { Component } from 'react'

export class Todo extends Component {
    constructor(props){
        super(props);
        this.state={
            title:"first todo"
        }
    }
    render() {
        return (
            <div>
                <div className="todoo">
                    <p >{this.state.title}</p>
                    <div className="statuss">
                    <button className="complete">Complete</button>
                    <button className="delete">X</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Todo
