import React from 'react';
import { Carousel, Row, Col, Image } from 'react-bootstrap';

const UsersReview = () => {
  return (
    <Carousel
      variant="dark"
      className="d-flex flex-row justify-content-center"
      style={{ height: '50vh' }}
    >
      <Carousel.Item className="h-100 align-self-center">
        <img
          src="https://media.istockphoto.com/vectors/gray-abstract-background-vector-id990697446?k=20&m=990697446&s=612x612&w=0&h=WTppK6aV-hj0zM-xZV3_rvN7ULnFDvVuzAHieCCUt3o="
          className="w-100 h-100"
        />
        <Carousel.Caption>
          <Row style={{ backgroundColor: 'white' }} className="h-100 p-5">
            <Col>
              <Image
                src="https://a6e8z9v6.stackpathcdn.com/hotale/hotel1/wp-content/uploads/sites/3/2021/12/customer03-150x150.jpg"
                roundedCircle
              />
            </Col>
            <Col>
              <p>
                A wonderful serenity has taken possession of my entire soul,
                like these sweet mornings of spring which I enjoy with my whole
                heart. I am alone, and feel the charm of existence.
              </p>
              <h4>Joan Smith</h4>
            </Col>
          </Row>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="h-100 align-self-center">
        <img
          src="https://media.istockphoto.com/vectors/gray-abstract-background-vector-id990697446?k=20&m=990697446&s=612x612&w=0&h=WTppK6aV-hj0zM-xZV3_rvN7ULnFDvVuzAHieCCUt3o="
          className="w-100 h-100"
        />
        <Carousel.Caption>
          <Row style={{ backgroundColor: 'white' }} className="h-100 p-5">
            <Col>
              <Image
                src="https://a6e8z9v6.stackpathcdn.com/hotale/hotel1/wp-content/uploads/sites/3/2021/12/customer1-150x150.jpg"
                roundedCircle
              />
            </Col>
            <Col>
              <p>
                A wonderful serenity has taken possession of my entire soul,
                like these sweet mornings of spring which I enjoy with my whole
                heart. I am alone, and feel the charm of existence.
              </p>
              <h4>Joan Smith</h4>
            </Col>
          </Row>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="h-100 align-self-center">
        <img
          src="https://media.istockphoto.com/vectors/gray-abstract-background-vector-id990697446?k=20&m=990697446&s=612x612&w=0&h=WTppK6aV-hj0zM-xZV3_rvN7ULnFDvVuzAHieCCUt3o="
          className="w-100 h-100"
        />
        <Carousel.Caption>
          <Row style={{ backgroundColor: 'white' }} className="h-100 p-5">
            <Col>
              <Image
                src="https://a6e8z9v6.stackpathcdn.com/hotale/hotel1/wp-content/uploads/sites/3/2021/12/customer02-150x150.jpg"
                roundedCircle
              />
            </Col>
            <Col>
              <p>
                A wonderful serenity has taken possession of my entire soul,
                like these sweet mornings of spring which I enjoy with my whole
                heart. I am alone, and feel the charm of existence.
              </p>
              <h4>Rose Smith</h4>
            </Col>
          </Row>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default UsersReview;
