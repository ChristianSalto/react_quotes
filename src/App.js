import React, { Fragment, useState, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';
import Form from './components/Form';
import Quote from './components/Quote';


const App = () => {

  console.log('2')
  let quotesStore = JSON.parse(localStorage.getItem('quotes'));
  if (!quotesStore) quotesStore = [];

  const [quotes, setQuotes] = useState(quotesStore);


  useEffect(() => {
    console.log('1')
    if (quotesStore) {
      localStorage.setItem('quotes', JSON.stringify(quotes))
    }
  }, [quotes, quotesStore])

  const handleListQuotes = quote => {
    setQuotes([
      ...quotes,
      quote
    ])
  }

  const handleRemoveQuotes = id => {
    const newQuotes = quotes.filter(quote => quote.id !== id);
    setQuotes(newQuotes);
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
            {quotes.length !== 0 ? quotes.map(quote => (
              <Quote key={quote.id} quote={quote} handleRemoveQuotes={handleRemoveQuotes} />
            )) : (
              <Alert variant="primary">
                Please insert quote
              </Alert>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
