import propTypes from 'prop-types';
import { useLayoutEffect, useRef, useState } from 'react';

export const Quote = ({quote, author}) => {
  
  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({
    width: 0,
    height: 0
  })

  useLayoutEffect(() => {
    const { height, width } = pRef.current.getBoundingClientRect();
    setBoxSize({width, height})
    }, [quote])

  return (
    <>
      <blockquote className='blockquote text-end' style={{display:'flex'}}>
          <p className='mb-1' ref={pRef}>{quote}</p>
          <footer className='blockquote-footer'>{author}</footer>
      </blockquote>

      <code> { JSON.stringify( boxSize ) } </code>


    </>
    
  ) 
}

Quote.propTypes = {
    quote: propTypes.string.isRequired,
    author: propTypes.string.isRequired
  }