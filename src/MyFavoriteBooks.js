import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import BestBooks from './BestBooks';
import './myFavoriteBooks.css';
import BookFormModal from './AddBook';
import axios from 'axios';
import UpdateForm from './UpdateForm';

class MyFavoriteBooks extends React.Component {

  constructor(props){
    super(props);
    this.state={
      displayForm: false,
      books: []
    }
  }

  updateBookList = (books) => {
    this.setState({books});
  }

  openForm = () => {
    this.setState({displayForm: true});
  };

  closeForm = () => {
    this.setState({displayForm: false});
  };

  deleteABook = async (index) => {
    try{
      console.log('working?')
    console.log('index', index);
    const newBookArray = this.state.books.filter((book, i) => {
      return parseInt(index) !== i;
    });
    this.setState({ books: newBookArray });
    }
    catch(err){
      console.log(err);
    }

    const SERVER = 'http://localhost:3001';
    const newBooks = await axios.delete(`${SERVER}/books/${index}`, {params: {email: this.props.user}});
    console.log(newBooks.data)
  }

  createABook = async(book) => {
    try{
    const SERVER = 'http://localhost:3001';
    const postBook = await axios.post(`${SERVER}/createbooks`, {email: this.props.user, name: book.title, description: book.description, status: book.status});
    this.updateBookList(postBook.data);
    console.log(postBook);
    }
    catch(err){
      console.log(err);
    }
  };

  updateBook = (idx) => {
    console.log(idx);
  }

  render() {
    return(
      <>
        <Jumbotron>
          <h1>My Favorite Books</h1>
          <p>
            This is a collection of my favorite books
          </p>
          <BestBooks books={this.state.books} updateBookList={this.updateBookList} deleteABook={this.deleteABook} email={this.props.user}/>
          <Button onClick={this.openForm}>Add a Book</Button>
          {this.state.displayForm &&
          <BookFormModal updateBook={this.createABook} closeForm={this.closeForm}></BookFormModal>
          }
          <UpdateForm/>
        </Jumbotron>
      </>
    )
  }
}

export default MyFavoriteBooks;
