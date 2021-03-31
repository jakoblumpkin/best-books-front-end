import React from 'react';
import axios from 'axios';

class BestBooks extends React.Component {

  constructor(props){
    super(props);
    this.state={
      books: [],
    }
  }

  componentDidMount = async () => {
    console.log(this.props);
    try {
      const SERVER = 'http://localhost:3001';
      const getBooks = await axios.get(`${SERVER}/books`, { params: {email: this.props.email}})
      console.log(getBooks);
      this.setState({books: getBooks.data});
    }
    catch(err){
      console.log(err);
    }
  }

  render() {
    return(
      this.state.books.map((book, i) => (
        <div key={i}>
          Title: {book.name}<br></br>
          Description: {book.description}<br></br>
          Status: {book.status}<br></br>
          <p>----------------</p>
        </div>
      ))
    )
  }
}

export default BestBooks;