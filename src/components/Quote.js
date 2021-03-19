import React, { Fragment, useState } from 'react';
import { Toast, Col } from 'react-bootstrap';

const Quote = ({ quote }) => {
  const [showA, setShowA] = useState(true);


  const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const day = new Date(quote.date);

  const toggleShowA = () => setShowA(!showA);


  return (
    <Fragment>
      <Col>
        <Toast show={showA} onClose={toggleShowA}>
          <Toast.Header>
            <strong className="mr-auto">{week[day.getDay()]}</strong>
            <small>{quote.date}</small>
          </Toast.Header>
          <Toast.Body>
            Name : <span>{quote.name}</span><br />
              Last name : <span>{quote.lastName}</span><br />
              Time :<span>{quote.time}h.</span><br />
              Description : <span>{quote.description}</span><br />
          </Toast.Body>
        </Toast>
      </Col>
    </Fragment>
  )
}

export default Quote;
