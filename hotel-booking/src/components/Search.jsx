import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;
import { useNavigate } from 'react-router';
import moment from 'moment';
import ReactGoogleAutocomplete from 'react-google-autocomplete';

const Search = ({ locationProps, dateProps, bedProps, row }) => {
  const arrDate = dateProps ? dateProps.split(',') : '';

  const navigate = useNavigate();

  const [location, setLocation] = useState(locationProps ? locationProps : '');
  const [date, setDate] = useState(arrDate);
  const [bed, setBed] = useState(bedProps ? bedProps : 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search-result?location=${location}&date=${date}&bed=${bed}`);
  };

  return (
    <>
      <Form onSubmit={handleSubmit} className="row p-3 search-form">
        <Form.Group className="mb-3 col-md-3">
          <ReactGoogleAutocomplete
            placeholder="Location"
            name="location"
            className="form-control"
            apiKey={import.meta.env.VITE_APP_GOOGLE_AUTOCOMPLETE}
            onPlaceSelected={(place) => {
              setLocation(place.formatted_address);
            }}
          />
        </Form.Group>

        <RangePicker
          style={{
            height: '45px',
            width: 'auto',
            padding: '0px 5px',
            borderRadius: '0.375rem',
          }}
          className="mb-2 col-md-4"
          onChange={(value, dateString) => setDate(dateString)}
          format="YYYY-MM-DD"
          defaultValue={
            date && [
              moment(date[0], 'YYYY-MM-DD'),
              moment(date[1], 'YYYY-MM-DD'),
            ]
          }
        />

        <Form.Group className="mb-3 col-md-4">
          <Form.Select
            name="bed"
            className="mb-3"
            value={bed}
            onChange={(e) => setBed(e.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </Form.Select>
        </Form.Group>

        <div className="col-md-1">
          <Button
            variant="light"
            type="submit"
            style={{
              height: '45px',
              width: '90px',
            }}
          >
            Search
          </Button>
        </div>
      </Form>
    </>
  );
};

export default Search;
