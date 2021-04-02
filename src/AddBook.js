import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

class BookFormModal extends React.Component {

  constructor(props){
    super(props);
      this.state={
        title: '',
        description: '',
        status: ''
      }
      this.handleChange=this.handleChange.bind(this);
      this.handleSubmit=this.handleSubmit.bind(this);
    }
  
  handleSubmit(e){
    e.preventDefault();
    this.props.updateBook(this.state);
  };

  handleChange(e){
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value});
  };

  render(){
    return(
      <Modal show={true}>
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Add Book:</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <form onSubmit={(e) => this.handleSubmit(e)}>
              <label>Title: </label>
              <input name="title" onChange={this.handleChange}></input><br></br>
              <label>Description: </label>
              <input name="description" onChange={this.handleChange}></input><br></br>
              <label>Status: </label>
              <input name="status" onChange={this.handleChange}></input><br></br>
              <button>Submit</button>
            </form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.closeForm}>Close Form</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
    )
  }
}


export default BookFormModal;