import React from "react";
import { Container, Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
class AddForm extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target)
    const newBook = {
      title: e.target.title.value,
      description: e.target.description.value,
      status: e.target.status.value
    }
    this.props.postBook(newBook);
  }


  render() {
    return (

      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="title">
            <Form.Label>Book Title</Form.Label>
            <Form.Control type="text" placeholder="Book Title Goes Here..." />
          </Form.Group>

          <Form.Group controlId="description">
            <Form.Label >Book Description</Form.Label>
            <Form.Control type="text" placeholder="Summarize The Book Here" />
          </Form.Group>

          <Form.Group controlId="status">
            <Form.Label >Book Status</Form.Label>
            <Form.Control type="text" placeholder="Have You Read The Book?" />
          </Form.Group>

          <Button type="submit">Add Book</Button>

        </Form>
      </Container>
    )
  }
}

export default AddForm;