import React, { useState } from 'react';



const MoviesCard = ({titre , description , posterURL, evaluation, AddToFavorie, id }) => {

    const [show , setShow] = useState(false);


    const showMe = show ? 'cacher details' : 'afficher details';




    return(

        <div className='col-md-4 col-sm-6 mb-2' style={{width: '25%'}}>
           <div className='card'>
               <div className='card card-header'>
                    <h5>{titre}</h5>
               </div>
               <div className='card card-body'>
                   <img src={posterURL} alt ='logo' style={{maxWidth: '100%'}} />
                   <h4>{evaluation}</h4>
                   <button className='btn btn primary' onClick={() => setShow(!show)}>{showMe}</button>
                   {show && <p>{description}</p> }
                   <button className='btn btn-success'>ajouter au favorix</button>
               </div>
           </div>
       </div>
    )
}

export default MoviesCard