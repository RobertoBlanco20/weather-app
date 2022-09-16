import React from 'react'

const Error = ({mensagge}) => {
    return ( 
        <p className='p-2 w-full bg-red-600 text-white text-center'>{mensagge}</p>
     );
}
 
export default Error;