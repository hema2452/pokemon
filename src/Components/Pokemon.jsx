import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Pokemon = ({data,favorites, toggleFavorite}) => {
    const navigate = useNavigate()



//   useEffect(() => {
//     async function pokemonData(){
//     const response = await fetch`)
//     const res = await response.json()
//     setData(res.results)
//     console.log("offdet:",offset)
    

//   }
//   pokemonData()
//  } ,[page])
  return (
    <>
        {
            data.length === 0 ? <h1>No Data Found </h1> : <div className='pokeman-card'>
                {data.map((item) => {
                    const capitalname = item.name[0].toUpperCase()+item.name.slice(1)
                    const id = item.id ? item.id : item.url.split("/")[6]
                    const isFav = favorites.includes(Number(id))

                    return(
                    <div key={id}  className='each-character' >                    
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} className='image-pokemon'/>
                        <h1 onClick={() =>navigate(`${id}`)}>{capitalname}</h1>
                            <button className="toogle-button" onClick={(e)=>{e.stopPropagation() 
                            toggleFavorite(Number(id))}}> {isFav ?"❤️" : "🤍" }</button>  
                        </div>
                        
                        )}
               )}
            </div>
        }
    </>
  )
}

export default Pokemon