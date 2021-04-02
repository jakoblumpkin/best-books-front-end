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
      displayUpdateForm: false,
      books: [],
      selectedBook: {},
      index: null,
      title: '',
      description: '',
      status: ''
    }
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
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

  openUpdateForm = () => {
    this.setState({displayUpdateForm: true});
  };

  closeUpdateForm = () => {
    this.setState({displayUpdateForm: false});
  };

  deleteABook = async (index) => {
    try{
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
    this.setState({selectedBook: this.state.books[idx], index: idx});
  }

  handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    // console.log(name, value);
    console.log(this.state.books[this.state.index]);
    this.setState({[name]: value});
  }


  componentDidUpdate = async () => {
    try {
      console.log('update');
      const SERVER = 'http://localhost:3001';
      const getBooks = await axios.get(`${SERVER}/books`, { params: {email: this.props.user}})
      this.updateBookList(getBooks.data);
      //listen for handle submit from form, run this function again
      //component did mount renders on change
    }
    catch(err){
      console.log(err);
    }
  };

  handleSubmit = async (e) => {
      e.preventDefault();
      try{
      const SERVER = 'http://localhost:3001';
      const putBook = await axios.put(`${SERVER}/books/${this.state.index}`, {email: this.props.user, name: this.state.title, description: this.state.description, status: this.state.status, id: this.state.index});
      console.log(putBook);
      // this.reRenderBestBooks();
      }
      catch(err){
      console.log(err);
      }
  };

  render() {
    return(
      <>
        <Jumbotron>
          <h1>My Favorite Books</h1>
          <p>
            This is a collection of my favorite books
          </p>
          <BestBooks books={this.state.books} updateBookList={this.updateBookList} deleteABook={this.deleteABook} email={this.props.user} openUpdateForm={this.openUpdateForm} updateBook={this.updateBook}/>
          <Button onClick={this.openForm}>Add a Book</Button>
          {this.state.displayForm &&
          <BookFormModal updateBook={this.createABook} closeForm={this.closeForm}></BookFormModal>
          }
          <UpdateForm displayUpdateForm={this.state.displayUpdateForm} closeUpdateForm={this.closeUpdateForm} selectedBook={this.state.selectedBook} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        </Jumbotron>
      </>
    )
  }
}

export default MyFavoriteBooks;
