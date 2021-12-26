import React, { useState } from 'react';
import './Style.css';



const Filtre = ({SearchFilm , AddNewFilm, SearchFilm2}) => {

    const [ Search , setSearch ] = useState('');
    const [ AddFilm, setAddFilm] = useState('');
    const [ filterFilm, setFilterFilm] = useState('');



    const changeForm = (e) => {
          e.preventDefault();

          SearchFilm(Search);
    };


     const ajouterFilm2 = (e) => {
        e.preventDefault();

        SearchFilm2(filterFilm)
    }

    
    const ajoutNewFilm = (e) => {
         e.preventDefault();

         AddNewFilm(AddFilm)
    }
    

   
  

return (
    <div>
        <form className='form-group mt-2' onChange={changeForm}>
           <div className='mb-2'>
              <input className='form-control' 
                     type='text' 
                     id='Search' 
                     value={Search} 
                     placeholder='par titre' 
                     onChange={(e) => setSearch(e.target.value)} />
           </div>
        </form>

        <form onSubmit={ajouterFilm2}>
            <input className='form-control mb-2' type='text'  placeholder='par evaluation' value={filterFilm} onChange={(e) => setFilterFilm(e.target.value)} />
        </form>

        <form onSubmit={ajoutNewFilm}>
              <input className='form-control mb-2' type='text'  placeholder='ajouter un film' value={AddFilm} onChange={(e) => setAddFilm(e.target.value)} />
        </form>
         
        
        
    </div>
    )
}

export default Filtre