import React from 'react'
import PropTypes from 'prop-types'

const Header = ({title}) => {
    return ( 
        <h1
            className='text-3xl mt-2 font-bold text-center'
        >{title}</h1>
     );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}
 
export default Header;