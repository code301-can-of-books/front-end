import { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Profile extends Component {
  render() {
    /* TODO: render information about the developers */
    return (
      <>
        <p>Profile page coming soon</p>
        <Card style={{ width: '18rem' }}>
          <Card.Img
            variant="top"
            src="https://avatars.githubusercontent.com/u/113139401?s=400&u=ad9f6fc9d1d7d1bffd802ee1fda4b6fb4106ad68&v=4"
          />
          <Card.Body>
            <Card.Title>Julio Ramirez</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <div>
              <a
                href="https://github.com/rzvdev1"
                target="_blank"
                rel="noreferrer"
              >
                <Button>GitHub Portfolio</Button>
              </a>
            </div>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title> Name</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <div>
              <a href="https://github.com/jonbrooks01" target="_blank" rel="noreferrer">
                <Button>GitHub Portfolio</Button>
              </a>
            </div>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default Profile;
