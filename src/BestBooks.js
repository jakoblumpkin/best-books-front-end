import React from 'react';
import axios from 'axios';

class BestBooks extends React.Component {

  constructor(props){
    super(props);
    this.state={
      displayUpdateForm: false,
    }
  }

  componentDidMount = async () => {
    console.log(this.props);
    try {
      const SERVER = 'http://localhost:3001';
      const getBooks = await axios.get(`${SERVER}/books`, { params: {email: this.props.email}})
      console.log(getBooks);
      this.props.updateBookList(getBooks.data);
      //listen for handle submit from form, run this function again
      //component did mount renders on change
    }
    catch(err){
      console.log(err);
    }
  }


  updateSelectedBook = (i) => {
    this.props.openUpdateForm();
    this.props.updateBook(i);
  };



  render() {
    return(
      this.props.books.map((book, i) => (
        <div key={i}>
          Title: {book.name}<br></br>
          Description: {book.description}<br></br>
          Status: {book.status}<br></br>
          <button onClick={() => this.props.deleteABook(i)}>Delete Book</button>
          <button onClick={() => this.updateSelectedBook(i)}>Update Book</button>
          <p>----------------</p>
        </div>
      ))
    )
  }
}

export default BestBooks;