import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert';
import { v4 as uuidv4 } from 'uuid';


const Form = ({ handleListQuotes }) => {

  const [quote, setQuote] = useState({
    name: '',
    lastName: '',
    date: '',
    time: '',
    description: ''
  })

  const [error, setError] = useState(false)

  const { name, lastName, date, time, description } = quote;

  const handleQuotes = event => {
    setQuote({
      ...quote,
      [event.target.name]: event.target.value
    })
  }

  const handleForm = event => {
    event.preventDefault();

    if (name.trim() === '' || lastName.trim() === '' || date.trim() === ''
      || time.trim() === '' || description.trim() === '') return setError(true);


    setError(false);

    quote.id = uuidv4();
    handleListQuotes(quote);

    setQuote({
      name: '',
      lastName: '',
      date: '',
      time: '',
      description: ''
    })

  }




  return (
    <Fragment>
      <h2>Create Quote</h2>
      <form onSubmit={handleForm}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          className="u-full-width"
          placeholder="Name"
          onChange={handleQuotes}
          value={name}
        />

        <label>Last name</label>
        <input
          type="text"
          name="lastName"
          className="u-full-width"
          placeholder="Last name"
          onChange={handleQuotes}
          value={lastName}
        />

        <label>Date</label>
        <input
          type="date"
          name="date"
          className="u-full-width"
          onChange={handleQuotes}
          value={date}
        />

        <label>Time</label>
        <input
          type="time"
          name="time"
          className="u-full-width"
          onChange={handleQuotes}
          value={time}
        />

        <label>Description</label>
        <textarea
          name="description"
          className="u-full-width"
          onChange={handleQuotes}
          value={description}
        >
        </textarea>

        <button
          type="submit"
          className="u-full-width"
        >Add Quotes</button>
      </form>
      {error ?
        <Alert variant="danger">
          All fields have to be complete
        </Alert>
        : null}
    </Fragment>
  )
}



Form.propTypes = {
  handleListQuotes: PropTypes.func.isRequired,
}

export default Form;
