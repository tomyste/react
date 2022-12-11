import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string'
import { useForm } from '../../hooks/useForm'
import { HeroCard } from '../components/HeroCard'
import { getHeroesByName } from '../helpers';


export const SearchPage = () => {


  
  const navigate = useNavigate();
  const location = useLocation();
  
  const { q = '' } = queryString.parse(location.search);
  const heroes = getHeroesByName( q );
  
  const showSearch = (q.length === 0);

  const showError = (q.length > 0 ) && (heroes.length === 0);


  const { searchText, onInputChange } = useForm({
    searchText: q
  });
 

  const onSearchSubmit = (event) => {
    event.preventDefault();
    // if (searchText.trim().length <= 1) return;
      
    navigate(`?q=${ searchText }`)
  }


  



  return (
    <>
      <div className='row mt-4'>
        <div className='col-5'>
          <h4> Searching </h4>
          <hr></hr>
          <form onSubmit={ onSearchSubmit } aria-label='form'>
            <input
            type="text"
            placeholder="Search a hero"
            className="form-control"
            name="searchText"
            autoComplete="off"
            value={ searchText }
            onChange={ onInputChange }
            >              
            </input>
            <button className='btn btn-outline-dark mt-2 btn-sm'>
              Search
            </button>
          </form>
        </div>

        <div className='col-7'>
          <h4>Results</h4>
          <hr/>

          <div aria-label='div-alert-search' className='alert alert-primary animate__animated animate__fadeIn' style={{ display: showSearch ? '' : 'none'}}> Search a hero</div>

          <div aria-label='div-alert-error' className='alert alert-danger animate__animated animate__fadeIn' style={{ display: showError ? '' : 'none'}}>
            No Hero witch <b> {q} </b>
          </div>

          
          {
            heroes.map( hero => (
              <HeroCard key={hero.id} {...hero}></HeroCard>
            ))
          }
        </div>

      </div>
      
    </>
  )
}
