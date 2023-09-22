import React, { useEffect, useState } from 'react';

const QuoteDisplay = () => {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const apiKey = '9KnYazkgIIH/ND2eZrD0Tw==EK5j0lWWuh8Jorvp';

        const response = await fetch(
          'https://api.api-ninjas.com/v1/quotes?category=happiness',
          {
            method: 'GET',
            headers: {
              'X-Api-Key': apiKey,
            },
          },
        );

        if (!response.ok) {
          throw new Error('Failed to fetch quote');
        }

        const data = await response.json();
        setQuote(data[0].quote);
        setQuote(data[0].quote);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    const interval = setInterval(fetchQuote, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
      Error: {error}
    </div>
    );
  }

  return <div>{quote}</div>;
};

export default QuoteDisplay;
