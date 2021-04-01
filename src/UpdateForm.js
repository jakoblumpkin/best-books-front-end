import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


class UpdateForm extends React.Component {
  
  render(){
    return (
      <Modal.Dialog>
          <Modal.Header>
          <Modal.Title>Update Book:</Modal.Title>
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
    );
  }
}



export default UpdateForm;