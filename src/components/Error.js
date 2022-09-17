import React from 'react'
import PropTypes from 'prop-types'

const Error = ({mensagge}) => {
    return ( 
        <p className='p-2 mt-4 w-full bg-red-600 text-white text-center'>{mensagge}</p>
     );
}

Error.propTypes = {
    mensagge: PropTypes.string.isRequired
} 
 
export default Error;