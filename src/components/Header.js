import React from 'react'

const Header = ({title}) => {
    return ( 
        <h1
            className='text-3xl mt-2 font-bold text-center'
        >{title}</h1>
     );
}
 
export default Header;