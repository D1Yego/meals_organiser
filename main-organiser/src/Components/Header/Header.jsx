import React from 'react';
import header from './Header.module.css';

const Header = ({}) => {
    return(
        <div className={header.wraper}>
            
            <div> 
                <h1>Logo</h1>
            </div>

            <div>
                <ul className={header.navWraper}>
                    <Link to={'#'}>Home</Link>
                    <Link to={'#'}>Recipes</Link>
                    <Link to={'#'}>More</Link>
                </ul>
            </div>
        </div>
    )
}

export default Header;