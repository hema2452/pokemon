import React, { useState } from 'react'
import { FaGreaterThan, FaLessThan } from "react-icons/fa";

const Pagination = ({ page, setPage }) => {
    const paginationNumbers = 5    
    const start = Math.floor((page - 1)/paginationNumbers) * paginationNumbers + 1
    const end = start + paginationNumbers - 1
    const pages = [] 
    for (let i = start; i<=end; i++){
        pages.push(i)
    }
    function handlePage(operation) {
        if (operation == "increase" && page >= 1) {
            setPage(page => page + 1)
        }
        else if (operation == "decrease" && page > 1) {
            setPage(page => page - 1)
        }
    }
    const handleValue = (e) => {
        const value = e.target.textContent
        setPage(value)
    }
    return (
        <div className="pagination">                        
            <FaLessThan onClick={() => handlePage("decrease")}  className='increase-logo' />
            <div className='pages'>
                {pages.map((item) => {
                    return(
                    <button  onClick={(e) => handleValue(e)} key={item} className= {Number(item) === Number(page) ? "color" : "no-color"}>
                     {item}

                    </button>

                )})}
            </div>
             <FaGreaterThan onClick={() => handlePage("increase")}  className='decrease-logo' />
         


        </div>
    )
}

export default Pagination