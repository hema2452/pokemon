import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const DisplayInfo = ({favorites, setFavorites,isLoaded,setIsLoaded}) => {
    const[displayData,setDisplayData] = useState([])
    const {id} = useParams();
    useEffect( ()=> {async function data() {  
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const pokeapidata = await res.json()
    setDisplayData(pokeapidata)
    }    
    data()},[id])
   
      const toggleFavorite = (id) => {
    setFavorites((prev) => {
      if(prev.includes(id)){
        return prev.filter((item) => item !== id)
      }
      else{
        return [...prev,id]
      }
    })
    }
    const isFav = favorites.includes(Number(id))
 
  
    return (
        
        <div className='display-container'> 
            <div className="dispaly-image-container">
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} alt="" />
                <button className="toggle-buuton" onClick={(e)=>{e.stopPropagation();toggleFavorite(Number(id))}}> {isFav ?"❤️" : "🤍" }</button>
            </div>
            <div>
                <p className="title">{displayData?.name}</p>
                <div>
                    <h2 className='types'> Types </h2>
                    {!displayData.types ?  <h1>Loading</h1> :displayData.types.map((item) =><p className='type-list' key={item.type.name}>{item.type.name}</p> )}
                </div>
                <p className='logo-size'>Height: <span>
                    {displayData.height}
                    </span></p>
                <p className='logo-size'>Weight:
                    <span>
                        {displayData.weight}
                    </span>
                    </p>
                <div className='abilities'>
                    Abilites
                    {!displayData.abilities ? <p >No Abilities</p> : displayData.abilities.map((item) => <li className='type-list'>{item.ability.name}</li>)}
                </div>
            
            </div>


        </div>
    )

}

export default DisplayInfo