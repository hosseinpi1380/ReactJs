import React, { Component } from 'react'
import TodoComponet from './todoComponet'
import './todo.css'
export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [],
            todoTitle: '',
            status: ''
        }
        this.addTodo = this.addTodo.bind(this)
        this.TodoTitle = this.TodoTitle.bind(this)
        this.removeTodo = this.removeTodo.bind(this)
        // this.editTodo = this.editTodo.bind(this)
        this.statusHandler = this.statusHandler.bind(this)
    }

    addTodo(event) {
        event.preventDefault()
        let newTodoObject = {
            id: this.state.todos.length + 1,
            title: this.state.todoTitle,
            compeleted: false
        }
        this.setState(prevState => {
            return {
                todos: [...prevState.todos, newTodoObject],
                todoTitle: ''
            }
        })
        console.log(this.state.todos)
        this.setState({
            todoTitle: ''
        })
    }

    TodoTitle(event) {
        this.setState({
            todoTitle: event.target.value
        })
    }

    

    removeTodo(todoId) {
        console.log(todoId)
        // let clickRemoveTodo = this.state.todos.find(todo => {
        //     return todo.id === todoId
        // })
        let newTodos = this.state.todos.filter(todo => {
            return todo.id !== todoId
        })
        console.log(newTodos)
    }
    // editTodo(id){
    //    let newTodos=[...this.state.todos]
    //    newTodos.forEach(todo=>{
    //     if(todo.id === id){
    //         todo.compeleted = !todo.compeleted
    //     }
    //    })
    // }
    statusHandler(event){
        this.setState({
            status:event.target.value
        })
    }
    render() {
        return (
            <>
                <div className="header"><h2>sabzlearn Todo List</h2></div>
                <div className='container'>
                    <form onSubmit={(event) => this.addTodo(event)}>
                        <div className="inputTodo">
                            <div className="input">
                                <input type="text" id='todo' value={this.state.todoTitle} placeholder='Todo' onChange={(event) => this.TodoTitle(event)} />
                                <button className='add'>add</button>
                            </div>
                            <select name="" id="" onChange={(event) => this.statusHandler(event)}>
                                <option value="all">all</option>
                                <option value="compeleted">compelted</option>
                                <option value="uncompeleted">uncompeleted</option>
                            </select>
                        </div>
                    </form>
                    <div className="todo-container">
                        <ul className="todo-list">
                            {this.state.todos.map(todo => (
                                <TodoComponet key={todo.id} {...todo} onRemove={this.removeTodo}  />
                            /* onEdit={this.editTodo} */
                            ))}
                        </ul>
                    </div>
                </div>
            </>

        )
    }
}
