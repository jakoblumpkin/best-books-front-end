import React from 'react';
import axios from 'axios';

class BestBooks extends React.Component {


  componentDidMount = async () => {
    console.log(this.props);
    try {
      const SERVER = 'http://localhost:3001';
      const getBooks = await axios.get(`${SERVER}/books`, { params: {email: this.props.email}})
      console.log(getBooks);
      this.props.updateBookList(getBooks.data);
    }
    catch(err){
      console.log(err);
    }
  }



  render() {
    return(
      this.props.books.map((book, i) => (
        <div key={i}>
          Title: {book.name}<br></br>
          Description: {book.description}<br></br>
          Status: {book.status}<br></br>
          <button onClick={() => this.props.deleteABook(i)}>Delete Book</button>
          <p>----------------</p>
        </div>
      ))
    )
  }
}

export default BestBooks;