import React, { Component } from 'react'

class Note extends Component{
    render(){
        return(
            <div>
                <p>Learn React</p>
                <span>
                    <button>Edit</button>
                    <button>Remove</button>
                </span>
            </div>
        )
    }
}

export default Note