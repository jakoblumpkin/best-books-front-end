import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


class UpdateForm extends React.Component {

  
  render(){
    return (
      <Modal show={this.props.displayUpdateForm}>
        <Modal.Dialog>
          <Modal.Header>
          <Modal.Title>Update Book:</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <form onSubmit={(e) => this.props.handleSubmit(e)}>
              <label>Title: </label>
              <input name="title" onChange={this.props.handleChange} placeholder={this.props.selectedBook.name}></input><br></br>
              <label>Description: </label>
              <input name="description" onChange={this.props.handleChange} placeholder={this.props.selectedBook.description}></input><br></br>
              <label>Status: </label>
              <input name="status" onChange={this.props.handleChange} placeholder={this.props.selectedBook.status}></input><br></br>
              <button>Update</button>
            </form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.closeUpdateForm}>Close Form</Button>
          </Modal.Footer>
      </Modal.Dialog>
    </Modal>
    );
  }
}



export default UpdateForm;