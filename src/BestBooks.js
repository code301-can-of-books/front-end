import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel'


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */

  componentDidMount() {
    this.fetchBooks();
  }

  async fetchBooks() {
    try {
      const response = await axios.get(`${process.env.REACT_APP_SERVER}/books`)
      console.log(response)
      this.setState({ 
        books: response.data,
      }, () => console.log(this.state.data))
    } catch (err) {
      console.error(err);
    }
  }

  render() {

    /* TODO: render all the books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length > 0 ? (
          <Carousel variant='dark'>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src= 'https://placehold.co/600x400?text=this.state.title'
                alt= ''
              />
              <Carousel.Caption>
                <h2>{this.state.title}</h2>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        ) : (
          <h3>No Books Found :</h3>
        )}


      </>
    )
  }
}

export default BestBooks;
