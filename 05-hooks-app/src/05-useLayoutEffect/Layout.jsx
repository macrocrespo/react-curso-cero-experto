import React from 'react'
import { Quote, LoadingQuote } from '../03-examples';
import { useCounter, useFetch } from '../hooks';

export const Layout = () => {

    const { counter, increment } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://breakingbadapi.com/api/quotes/${counter}`);
    const { author, quote } = !!data && data[0];

    return (
        <>
            <h1>Breaking Bad Quotes</h1>
            <hr />

            {
                isLoading
                    ? <LoadingQuote />
                    : <Quote quote={quote} author={author} />
            }

            <button 
                disabled={isLoading}
                className="btn btn-primary" 
                onClick={ () => increment() }>
                Next Quote
            </button>

        </>
    )
}
