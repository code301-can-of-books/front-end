import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import './BestBooks.css';
import AddForm from './AddForm';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showModal: false,
    };
  }

  hideModal = () => {
    this.setState({ showModal: false });
  };

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  componentDidMount() {
    this.fetchBooks();
  }

  fetchBooks = async () => {
    try {
      const response = await axios(`${process.env.REACT_APP_SERVER}/book`);
      console.log('API Response:', response);
      this.setState({ books: response.data });
    } catch (error) {
      console.error(error);
    }
  };

  postBook = async (newBook) => {
    try {
      const url = `${process.env.REACT_APP_SERVER}/book`;
      const response = await axios.post(url, newBook);
      this.setState({ books: [...this.state.books, response.data] }, () =>
        console.log(this.state.books)
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  deleteBook = async (deleteBook) => {
    const url = `${process.env.REACT_APP_SERVER}/book/${deleteBook._id}`;
    await axios.delete(url);
    const updatedBook = this.state.books.filter(
      (book) => book._id !== deleteBook._id
    );
    this.setState({ books: updatedBook });
  };

  render() {
    /* TODO: render all the books in a Carousel */
    console.log(this.state.books);
    return (
      <div>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        <div>
          {this.state.books.length > 0 ? (
            <Carousel variant="dark">
              {this.state.books.map((book, idx) => (
                <Carousel.Item key={idx}>
                  <img
                    className="d-block w-100"
                    src={`https://placehold.co/600x400?text=${book.title}`}
                    alt=""
                  />
                  <Carousel.Caption>
                    <h4>Status:{book.status}</h4>
                    <p>{book.description}</p>
                    <Button onClick={() => this.deleteBook(book)}>
                      Delete Book
                    </Button>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          ) : (
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={`https://placehold.co/600x400?text=No+Books+Found`}
                  alt="No Books Found"
                />
              </Carousel.Item>
            </Carousel>
          )}
        </div>
        <Button onClick={() => this.setState({ showModal: true })}>
          Add Your Book
        </Button>
        <div>
          <AddForm
            postBook={this.postBook}
            showModal={this.state.showModal}
            hideModal={this.hideModal}
            books={this.state.books}
            deleteBook={this.deleteBook}
          />
        </div>
      </div>
    );
  }
}

export default BestBooks;
