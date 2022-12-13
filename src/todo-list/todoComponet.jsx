import React, { Component } from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import { BsTrash } from 'react-icons/bs'
import './todo.css'
export default class TodoComponet extends Component {
    constructor(props) {
        super(props)
        this.removeClickHandler = this.removeClickHandler.bind(this)
        // this.editHandler = this.editHandler.bind(this)
    }
    
    removeClickHandler(id) {
        this.props.onRemove(id)
    }
    // editHandler(id){
    //     this.props.onEdit(id)
    // }
    render() {
        return (
            <div style={{
                height: '50px',
                width: '300px',
                textAlign: 'center'
            }} className={`todo ${this.props.compeleted ? 'completed' : ''}`}>
                <form action="">
                    <input type="text" defaultValue={this.props.title} readOnly />
                    <button className='done' ><AiOutlineCheck /></button>
                    {/* onClick={this.editHandler(this.props.id)} */}
                    <button className='remove' onClick={this.removeClickHandler( this.props.id)}>
                        <BsTrash />
                    </button>
                </form>
            </div>
        )
    }
}
