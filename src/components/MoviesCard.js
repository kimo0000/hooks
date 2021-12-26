import React, { useState } from 'react';
import ListeDesFilms from './ListeDesFilms';
import Filtre from './Filtre';
import info from './Info'

import '../App.css';




const MovieCard = () => {
    const [Movie , setMovie] = useState(info);
    const [ warning, setWarning ] = useState(false);
    



   const SearchFilm = (filterMovie) => {
        const AddFilms = [...Movie.filter(value => value.titre.includes(filterMovie))];
        setMovie(AddFilms)
  };

  const SearchFilm2 = (filterMovie2) => {
         setMovie([...info.filter(value => value.evaluation.includes(filterMovie2))])
  };




  const AddNewFilm = (AddFilms) => {
    if (AddFilms !== '') {
        warning && setWarning(false)
        
             setMovie([...info, 
                   { id : new Date().getTime(),
                     titre : AddFilms,
                     evaluation : AddFilms,
                     description : AddFilms,
                     posterURL : AddFilms,
                   }
                ]);
    }else {
      setWarning(true);
    }
  }

  


     return(
       <div className=' container row'>
                 {
                   warning && <div class="alert alert-danger mt-3" role="alert">veillez indiquer un film</div>
                 }

                 <Filtre SearchFilm={SearchFilm}
                         SearchFilm2={SearchFilm2}
                         AddNewFilm={AddNewFilm} 
                />
                 
                 {
                   Movie.map((element , index) => <ListeDesFilms key={index}
                                                          titre={element.titre}
                                                          description={element.description}
                                                          posterURL={element.posterURL}
                                                          evaluation={element.evaluation} 
                                                  />)
                 }                         
       </div>
    )
}

export default MovieCard