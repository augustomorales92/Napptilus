import React from 'react';

const SearchBar = ({search, setSearch}) => {
    return (
        <nav className="navbar bg-transparent d-flex justify-content-end">
        <div className="" >
          <form className="d-flex" role="search">
            <input className="form-control" type="search" placeholder="Search" aria-label="Search" onChange={(e)=> setSearch(e.target.value)} value={search}/>
          </form>
        </div>
      </nav>
    )
}

export default SearchBar;