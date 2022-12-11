
import { useCounter, useFetch } from '../hooks';
import { LoadingQuote } from './LoadingQuote';
import { Quote } from './Quote';




export const MultipleCustomHooks = () => {

    const {counter, increment, decrement, reset} = useCounter(9) 

    const url = `https://www.breakingbadapi.com/api/quotes/${ counter }`
    const { data, isLoading} = useFetch(url);
    
    const { author, quote} = !!data && data[0];
        

    return (
        <>
            <h1 className='text-center'>BreakinBad Quotes</h1>
            <hr/>

            {/* {
                isLoading ? (
                    
                    <div className='alert alert-info text-center'> 
                    Loading...</div>

                ):( 

                    <blockquote className='blockquote text-end'>
                        <p className='mb-1'>{quote}</p>
                        <footer className='blockquote-footer'>{author}</footer>
                    </blockquote>

                )
            } */}

            {
                isLoading ? (
                    <LoadingQuote></LoadingQuote>
                ):(
                    <Quote author={author} quote={quote}></Quote>
                )
            }

            <button className='btn btn-dark' onClick={ () => decrement()}disabled={isLoading}> Back Quote</button>
            <button className='btn btn-danger' onClick={ () => reset()}disabled={isLoading}>  Restart</button>
            <button className='btn btn-dark' onClick={ () => increment()}disabled={isLoading}>  Next Quote</button>

        

        </>
    )
}
