import React from 'react'
import Logo from '../../Logonetflix.png'
import { Link } from 'react-router-dom'
import {ImSearch} from "react-icons/im"
function Header() {
  return (
    <nav className='header'>
        <img src={Logo} alt="netflix logo" />
        <div>
            <Link to="/">Home</Link>
            <Link to="/tvshows">TV Shows</Link>
            <Link to="/movies">Movies</Link>
            <Link to="/recently_added">Recently Added</Link>
            <Link to="/my_list">My List</Link>
        </div>
        <ImSearch/>
    </nav>
  )
}

export default Header
