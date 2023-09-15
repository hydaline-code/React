import React, { useEffect, useState } from 'react';

const QuoteDisplay = () => {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const apiKey = '9KnYazkgIIH/ND2eZrD0Tw==EK5j0lWWuh8Jorvp'; // Replace 'YOUR_API_KEY' with your actual API key

        const response = await fetch(
          'https://api.api-ninjas.com/v1/quotes?category=happiness',
          {
            method: 'GET',
            headers: {
              'X-Api-Key': apiKey,
            },
          }
        );

        if (!response.ok) {
          throw new Error('Failed to fetch quote');
        }

        const data = await response.json();
       // setQuote(data[0].quote); // Access the quote text from the first element
       const randomIndex = Math.floor(Math.random() * data.length);
       setQuote(data[randomIndex].quote);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    const interval = setInterval(fetchQuote, 5000); // Fetch a new quote every 5 seconds

    return () => {
      clearInterval(interval); // Clean up the interval when the component unmounts
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <div>{quote}</div>;
};

export default QuoteDisplay;