import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Modal, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { deleteHotel, sellerHotels } from '../../actions/hotels';
import HotelCard from '../cards/HotelCard';

const Connected = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  const { token } = auth;
  const [hotels, setHotels] = useState([]);
  const [smShow, setSmShow] = useState(false);
  const [id, setId] = useState(null);

  const getSellerHotels = async () => {
    try {
      const res = await sellerHotels(token);
      if (res.data) {
        setHotels(res.data);
      }
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  const deleteHandler = async () => {
    try {
      const res = await deleteHotel(token, id);
      toast.success('Hotel deleted successfully! 🔥');
      setSmShow(false);
      getSellerHotels();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getSellerHotels();
  }, []);

  return (
    <>
      <Row className="mt-4">
        <Col
          md={{ span: 10, offset: 1 }}
          className="mb-4 d-flex justify-content-between align-items-center"
        >
          <h3 className="mb-0">Your hotels</h3>
          <Link to="/hotels/new" className="btn btn-dark">
            + Add Hotel
          </Link>
        </Col>
      </Row>
      <Container>
        <Row>
          {hotels && hotels.length ? (
            hotels.map((hotel) => {
              return (
                <Col key={hotel._id} md={4}>
                  <Link
                    to={`/hotels/${hotel._id}`}
                    className="text-decoration-none text-dark"
                  >
                    <HotelCard
                      hotel={hotel}
                      isOwner={true}
                      setSmShow={setSmShow}
                      setId={setId}
                    />
                  </Link>
                </Col>
              );
            })
          ) : (
            <img
              src="https://media.tenor.com/Ta_hcuLCfCAAAAAM/%E4%BD%95%E3%82%82%E3%81%AA%E3%81%84-%E3%83%8A%E3%83%83%E3%82%B7%E3%83%B3%E3%82%B0.gif"
              style={{ height: '50vh', objectFit: 'contain' }}
            />
          )}
        </Row>
      </Container>
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header>
          <Modal.Title id="example-modal-sizes-title-sm">
            Are you sure?
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setSmShow(false)}>
            Close
          </Button>
          <Button variant="danger" onClick={deleteHandler}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Connected;
