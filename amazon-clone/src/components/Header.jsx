import React from 'react'
import brand from '../assets/PngItem_12080.png'
import '../components/Header.css'
import {Link} from 'react-router-dom';
import Search from '@mui/icons-material/Search';

import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const Header = () => {
  return (
    <header className='header'>

        <Link to ='/' >
        <img className='header__logo' src={brand} alt='logo'/>
        </Link>

        <div className='header__search'>
        <input className = "header__searchInput"/>
        <Search className='header__searchIcon'/>
        </div>

      <nav className='headerNav'>

        <Link to = "/login" className='header__link'>
        <div className="header__option">
        <span className='header__optionLineOne'>Hello</span>
        <span className='header__optionLineTwo'>Govindaraj</span>
        </div>
        </Link>

        <Link to = "/checkout" className='header__link'>
        <div className="header__option">
        <span className='header__optionLineOne'>Orders</span>
        <span className='header__optionLineTwo'>& Returns</span>
        </div>
        </Link>
        
        <Link to = "/" className='header__link'>
        <div className="header__option">
        <span className='header__optionLineOne'>Your</span>
        <span className='header__optionLineTwo'>Prime</span>
        </div>
        </Link>
        
        <Link to = "/checkout" className='header__link'>
        <div className="header__optionBasket header__option">
        <ShoppingBasketIcon className='header__optionBasketIcon'/>
        <span className='header__optionLineTwo'>0</span>
        </div>
        </Link>

      </nav>
        
        
        
    </header>
  )
}

export default Header
