import React, { Fragment, useState } from 'react';
import Form from './components/Form';
import Quote from './components/Quote';


const App = () => {

  const [quotes, setQuotes] = useState([])

  const handleListQuotes = quote => {
    setQuotes([
      ...quotes,
      quote
    ])
  }

  return (
    <Fragment>
      <h1>Quotes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form
              handleListQuotes={handleListQuotes}
            />
          </div>
          <div className="one-half column">
            <h2>Show quotes</h2>
            {quotes.map(quote => (
              <Quote key={quote.id} quote={quote} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
