import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import BestBooks from './BestBooks';
import './myFavoriteBooks.css';

class MyFavoriteBooks extends React.Component {
  render() {
    console.log(this.props);
    return(
      <Jumbotron>
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>
        <BestBooks email={this.props.user}/>
      </Jumbotron>
    )
  }
}

export default MyFavoriteBooks;
