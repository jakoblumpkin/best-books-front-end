import React from 'react';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
// import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import { withAuth0 } from '@auth0/auth0-react';
import Login from './Login';
import MyFavoriteBooks from './MyFavoriteBooks';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Profile from './Profile';

class App extends React.Component {

  // constructor(props){
  //   super(props);
  //   this.state={
  //     books: [], 
  //     name: '',
  //     catName: ''
  //   }
  // }


  render() {
    console.log('appprops', this.props);
    return (
      <Router>
        <Header />
        {!this.props.auth0.isAuthenticated &&
          <Switch>
            <Route path="/" component={Login}/>
          </Switch>
        }
        {/* <IsLoadingAndError> */}
          {this.props.auth0.isAuthenticated &&
            <>
              <Switch>
                <Route path="/" render={(props) => <MyFavoriteBooks user={this.props.auth0.user.email} isAuthed={true}/>}/>
              </Switch>
              <Switch>
                <Route path="/profile">
                  <Profile/>
                </Route>
              </Switch>
            </>
          }
          <Footer />
        {/* </IsLoadingAndError> */}
      </Router>
    )
  }
}

export default withAuth0(App);
