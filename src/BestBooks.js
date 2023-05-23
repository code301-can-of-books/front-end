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
      <div>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length > 0 ? (
          <Carousel variant='dark' >
            {this.state.books.map((book) =>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={`https://placehold.co/600x400?text=${book.title}`}
                  alt=''
                />
                <Carousel.Caption>
                  <h4>
                    Status:{book.status}
                  </h4>
                  <p>{book.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            )}
          </Carousel>
        ) : (<Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={`https://placehold.co/600x400?text=No+Books+Found`}
              alt='No Books Found'
            />
          </Carousel.Item>
        </Carousel>
        )}
      </div>
    )
  }
}

export default BestBooks;
