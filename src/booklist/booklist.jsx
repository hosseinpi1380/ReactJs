import React, { Component } from 'react'
import './booklist.css'
import { BsBook } from 'react-icons/bs'
import Book from './Book'
export default class Booklist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            books: [],
            title: '',
            year: '',
            author: '',
            allValid: false
        }
    }
    submitHandler(event) {
        event.preventDefault()
        let { title, author, year, books } = this.state
        if (title && author && year) {
            let newBooks = { id: books.length + 1, title, author, year }
            this.setState({
                books: [...this.state.books,newBooks]
            })
            this.setState({
                title:'',author:'',year:''
            })
        }
    }
    titleHandler(event) {
        this.setState({
            title: event.target.value
        })
    }
    authorHandler(event) {
        this.setState({
            author: event.target.value
        })
    }
    yearHandler(event) {
        this.setState({
            year: event.target.value
        })
    }
    render() {
        return (
            <div className='container'>
                <h1><BsBook style={{ color: 'orange' }} />SabzLearn js<span>Book</span></h1>
                <form action="" onSubmit={(event) => this.submitHandler(event)} >
                    <label >Title</label>
                    <input type="text" onChange={(event) => this.titleHandler(event)} value={this.state.title} />
                    <label >Author</label>
                    <input type="text" onChange={(event) => this.authorHandler(event)} value={this.state.author} />
                    <label >Year</label>
                    <input type="text" onChange={(event) => this.yearHandler(event)} value={this.state.year} />
                    <input type="submit" value='Add Book' />
                </form>
                <table>
                    <tbody>
                        <tr>
                            <td>title</td>
                            <td>author</td>
                            <td>year</td>
                        </tr>
                        {this.state.books.map(book => (
                            <Book {...book} key={book.id} />
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}
