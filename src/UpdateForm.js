import React from "react";
import { Modal, Form, Button } from "react-bootstrap";

class UpdateForm extends React.Component {
  
 handleSubmit = (e) => {
   e.preventDefault();

   const updatedBook = {
    title: e.target.title.value || this.props.book.title,
    description: e.target.description.value || this.props.book.description,
    status: e.target.status.value || this.props.book.status,
    _id: this.props.book._id
   }
   this.props.updatedBook(updatedBook);
   this.props.hideUpdatedModal();
 } 


render() {
  return (
      <Modal show= {this.props.updatedModal} onHide={this.props.hideUpdatedModal}>
          <Modal.Header closeButton><Modal.Title style={{color: 'green'}}>Update Book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId = "title">
                    <Form.Label>Book Title</Form.Label>
                    <Form.Control type='text' placeholder={this.props.book.title} />
                  </Form.Group>

                  <Form.Group controlId="description">
                    <Form.Label>Book Description</Form.Label>
                    <Form.Control type='text' placeholder={this.props.book.description} />
                  </Form.Group>

                  <Form.Group controlId="status">
                    <Form.Label>Status</Form.Label>
                    <Form.Control type='text' placeholder={this.props.book.status} />
                  </Form.Group>

                  <Button variant="secondary" type="submit">Update Book</Button>
            </Form>
          </Modal.Body>
      </Modal>
  )
}

}
export default UpdateForm;