import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import './BestBooks.css';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  componentDidMount() {
    this.fetchBooks();
  }

  async fetchBooks() {
    try {
      const response = await axios(`${process.env.REACT_APP_SERVER}/books`);
      console.log('API Response:', response);
      this.setState({ books: response.data });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    /* TODO: render all the books in a Carousel */
    console.log(this.state.books);
    return (
      <>
        {/* <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        <h2>{this.state.title}</h2>
        {this.state.books.length ? (
          <p>Book Carousel coming soon</p>
        ) : (
          <h3>No Books Found :(</h3>
        )}

        {this.state.books.length > 0 &&
          this.state.books.map((book, idx) => (
            <div key={book._id}>
              Title: {book.title} Description: {book.description} Status:{' '}
              {book.status}
            </div>
          ))} */}
        {this.state.books.length ? (
          <Carousel>
            {this.state.books.map((book) => (
              <Carousel.Item key={book._id}>
                {/* <img
                  className="d-block w-100"
                  src={book.imageUrl}
                  alt={book.title}
                /> */}
                <h3>{book.title}</h3>
                <p>{book.description}</p>
                <p>{book.status}</p>
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    );
  }
}

export default BestBooks;
