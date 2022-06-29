import React from 'react'
import { GrSearch } from "react-icons/gr"
import "./search.scss"

const Search = ({ placeholder, search, setSearch }) => {
    return (
        <form className='apiSearchForm'>
            <div className='iconContainer'>
                <GrSearch className='icon' />
            </div>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder={placeholder} />
        </form>
    )
}

export default Search