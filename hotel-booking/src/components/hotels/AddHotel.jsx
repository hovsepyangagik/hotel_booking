import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import { createHotel } from '../../actions/hotels';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import ReactGoogleAutocomplete from 'react-google-autocomplete';
import { DatePicker, Divider } from 'antd';
const { RangePicker } = DatePicker;

const initialState = {
  title: '',
  content: '',
  image: '',
  price: '',
  from: '',
  to: '',
  bed: '',
};

const initialImage =
  'https://www.pngfind.com/pngs/b/66-661092_upload-icon-png.png';

const AddHotel = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  const { token } = auth;
  const [values, setValues] = useState(initialState);
  const [location, setLocation] = useState('');
  const [preview, setPreview] = useState(initialImage);

  const handleImageChange = (e) => {
    setPreview(URL.createObjectURL(e.target.files[0]));
    setValues({ ...values, image: e.target.files[0] });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('title', values.title);
      formData.append('content', values.content);
      formData.append('location', location);
      formData.append('price', values.price);
      formData.append('bed', values.bed);
      formData.append('from', values.from);
      formData.append('to', values.to);
      values.image && formData.append('image', values.image);

      const res = await createHotel(token, formData);
      toast.success('New hotel is posted');
      setValues(initialState);
      setPreview(initialImage);
      setLocation('');
    } catch (err) {
      toast.error(err);
    }
  };
  return (
    <>
      <div className="container-fluid bg-edit p-5 text-center">
        <h3 className="display-5 text-white">Add Hotel</h3>
      </div>

      <Container className="mt-4 mb-4">
        <Row className="gap-4">
          <Col md={{ span: 3, offset: 2 }}>
            <label className="w-100 pointer">
              <img
                src={preview}
                alt="preview_image"
                className="img img-fluid m-2 w-100"
              />
              <input
                type="file"
                name="image"
                onChange={handleImageChange}
                accept="image/*"
                hidden
              />
            </label>
          </Col>
          <Col md={{ span: 4 }} className="shadow">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">Title</Form.Label>

                <Form.Control
                  className="form-input"
                  name="title"
                  type="text"
                  value={values.title}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Content</Form.Label>
                <Form.Control
                  className="form-input"
                  name="content"
                  as="textarea"
                  value={values.content}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Location</Form.Label>
                <ReactGoogleAutocomplete
                  placeholder=""
                  className="form-control form-input"
                  apiKey={import.meta.env.VITE_APP_GOOGLE_AUTOCOMPLETE}
                  onPlaceSelected={(place) => {
                    setLocation(place.formatted_address);
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  className="form-input"
                  name="price"
                  type="number"
                  value={values.price}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-5">
                <Form.Label>Number of beds</Form.Label>
                <Form.Select
                  name="bed"
                  className="mb-3 form-input"
                  value={values.bed}
                  onChange={handleChange}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </Form.Select>
              </Form.Group>

              <RangePicker
                className="mb-3 w-100 form-input"
                onChange={(date, dateString) => {
                  setValues({
                    ...values,
                    from: dateString[0],
                    to: dateString[1],
                  });
                }}
                format="YYYY-MM-DD"
              />
              <div>
                <Button variant="outline-dark" type="submit">
                  Save
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AddHotel;
