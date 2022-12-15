import React from 'react';
import { Container, Row } from 'react-bootstrap';
import DividerLine from '../components/dividerLine/DividerLine';
import Hotels from '../components/Hotels';

const AllHotels = () => {
  return (
    <Container>
      <Row className=" mb-5 mt-3 justify-content-center">
        <h2 className="display-5" style={{ textAlign: 'center' }}>
          All available hotels
        </h2>
      </Row>
      <Row className="justify-content-center mb-5">
        <DividerLine />
      </Row>
      <Row>
        <Hotels />
      </Row>
    </Container>
  );
};

export default AllHotels;
