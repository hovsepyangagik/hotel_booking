import { Container, Row, Col } from 'react-bootstrap';
import Search from '../Search';

const HomeBanner = () => {
  return (
    <div className="home-banner">
      <Container className="p-7">
        <Row className="mb-5 text-right text-center-md">
          <h1 className="text-end h1 text-light display-3 text-center-md">
            It's time to Discover
          </h1>
          <h4 className="text-end text-light display-5 text-center-md">
            Find and book a great experience
          </h4>
        </Row>
        <Row>
          <Search />
        </Row>
      </Container>
    </div>
  );
};

export default HomeBanner;
