import { useMemo } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { getHeroById } from '../helpers'

export const HeroPage = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const hero = useMemo( () => getHeroById( id ), [ id ]);
  

  const onNavigateBack = () => {
     navigate(-1);

  }


  if(!hero){
    return <Navigate to='/Marvel'></Navigate>
  }
  
  

  return (
    <div className="row mt-5  ">
      <div className="col-4 animate__animated animate__backInLeft">
        <img src={`/assets/heroes/${id}.jpg`}
        alt={hero.superhero}
        className="img-thumbnail">
        </img>
      </div>    
      <div className="col-8 animate__animated animate__fadeIn">
        <ul className="list-group list-group-flush">
          <li className="list-group-item"> <h1>{hero.superhero}</h1></li>
          <li className="list-group-item"> <b>Alter ego:</b> {hero.alter_ego}</li>
          <li className="list-group-item"> <b>Publisher:</b> {hero.publisher}</li>
          <li className="list-group-item"> <b>first_appearance</b> {hero.first_appearance}</li>
        </ul>

        <h5 className="mt-3 ms-3"> Characters</h5>
        <p className="ms-3"> {hero.characters}</p>

        <button className="btn btn-outline-dark ms-3 mt-3" onClick={ onNavigateBack }> Back </button>
      </div>
      
    </div>
  )
}
