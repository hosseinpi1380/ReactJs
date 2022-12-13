import React, { Component } from 'react'
import ColorBox from './colorBox.jsx'
import Task from './taskt.jsx'
import { GrAdd } from 'react-icons/gr'
import './note-app.css'
export default class NoteApp extends Component {
  constructor() {
    super()
    this.state = {
      colors: [
        "#fff",
        "#ff0844",
        "#7028e4",
        "#00c6fb",
        "#fda085",
        "#88d3ce",
        "",
        "#a6c0fe",
      ],
      notes: [],
      noteTitle: '',
      inputColor: '#fff'
    }
    this.noteTitleHandler = this.noteTitleHandler.bind(this)
    this.addNewHandler = this.addNewHandler.bind(this)
    this.colorSetHand = this.colorSetHand.bind(this)
    
  }
  noteTitleHandler(event) {
    this.setState({
      noteTitle: event.target.value
    })
  }
  
  addNewHandler(){
    console.log('hello world')
    let newTask = { name: this.state.noteTitle , color:this.state.inputColor}
    this.setState({
      notes: [...this.state.notes, newTask]
    })
    this.state.noteTitle=''
    this.state.inputColor=''
  }
  colorSetHand(color){
    this.setState({
      inputColor:color
    })
  }
 
  render() {
    return (
      <>
      <div className='container'>
        <div className="title">
          <h1>Sabzlearn NotApp</h1>
          <input type="text" placeholder='' value={this.state.noteTitle} onChange={(event) => this.noteTitleHandler(event)} 
            style={{backgroundColor:this.state.inputColor}}
          />
          <div className="colors">
            {
              this.state.colors.map(color => (
                <ColorBox color={color} key={color} onColor={this.colorSetHand}/>
              ))
            }
            <button onClick={this.addNewHandler}><GrAdd /></button>
          </div>
        </div>
      <div className="tasks">
          {this.state.notes.map(task => (
              <Task key={task.name} {...task}/>
            ))}
        </div>
      </div>
      </>
    )
  }
}
