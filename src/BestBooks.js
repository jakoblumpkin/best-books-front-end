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
      this.state.books.length > 0 && (
      this.state.books.map((book, i) => (
        <div key={i}>
          {book.name}
        </div>)
      ))
    )
  }
}

export default BestBooks;