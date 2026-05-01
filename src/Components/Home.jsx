import React, { useEffect, useState } from 'react'
import Pokemon from './Pokemon';
import Pagination from './Pagination';



const Home = ({favorites, setFavorites,isLoaded,setIsLoaded}) => {
  const [search,setSearch]  = useState("")
  const [page,setPage] = useState(1)
  const [data, setData ] = useState([])
  const [type,setType] = useState("")

  const limit = 20
  const offset = (page-1) *limit

   useEffect(()=>{
    async function searchData(){ 
    if(type !==""){
        const typeResponse = await fetch(`https://pokeapi.co/api/v2/type/${type}`)
        const  res = await typeResponse.json()
        const filtered  = res.pokemon.map(item => item.pokemon)
        setData(filtered.slice(0,20))
        setSearch("")
    }
    else if(search.length>3){
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`)
      if(!response.ok){
        setData([])
        return
      }
      const res = await response.json()    
      setData([res])}
      else{
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)   
      if(!response.ok){
        setData([])
        return
      } 
      const res = await response.json()
      setData(res.results)
      setType("")
    }
    } searchData()}
    ,[search,page,type])
  useEffect(()=> {
    const stored = localStorage.getItem("favorites")
    if(stored){
      setFavorites(JSON.parse(stored).map(Number))
    }
    setIsLoaded(true)
  },[])

  useEffect(() =>{
    if(!isLoaded) return
    localStorage.setItem("favorites", JSON.stringify(favorites))  
  },[favorites,isLoaded])


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
 
  return (
    <>
    <div className='search-select'>
          <input type="text" name="search" id="search" onChange={(e) => {setSearch(e.target.value)}} placeholder='Enter a character'/>
          <div className="select-value">
               <label  htmlFor="type">Filter By Type</label>
          <select  name="type" id="type" onChange={(e)=> {setType(e.target.value)}}>
            <option value="fire">Fire</option>
            <option value="water">Water</option>
            <option value="normal">Normal</option>
            <option value="elelctric">Electric</option>
              <option value="grass">Grass</option>
            <option value="ice">Ice</option>
              <option value="ground">Ground</option>
            <option value="fighting">Fighting</option>
              <option value="ice">Ice</option>
            <option value="flying">Flying</option>
            <option value="psychic">Psychic</option>
            <option value="bug">Bug</option>
            <option value="rock">Rock</option>

          </select>

          </div>
       
    </div>

      {/* add filter  */}
    <Pokemon page={page} data={data} favorites={favorites} toggleFavorite={toggleFavorite} />
    <Pagination page={page} setPage={setPage}/>

    </>
  )
}

export default Home