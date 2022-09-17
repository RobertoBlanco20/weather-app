import React from 'react';
import PropTypes from 'prop-types';

const Info = ({result}) => {

    const {main, name} = result;
    const kelvin = 273.15;

    /* Si no tiene nada en main, no muestra nada. */
    if( !main ) return null;

    return ( 
        <div>
            <h2 className="text-3xl text-center font-bold">{name}</h2>
            <p className="text-5xl my-6 text-center font-bold">{ parseFloat( main.temp - kelvin, 10 ).toFixed(1)} <span>&#x2103;</span></p>
            
            <div className="flex justify-around">
                <p className='font-bold'>T. Max: { parseFloat( main.temp_max - kelvin, 10 ).toFixed(1)} <span>&#x2103;</span></p>
                <p className='font-bold'>T. Min: { parseFloat( main.temp_min - kelvin, 10 ).toFixed(1)} <span>&#x2103;</span></p>
                <p className='font-bold'>ST: { parseFloat( main.feels_like - kelvin, 10 ).toFixed(1)} <span>&#x2103;</span></p>
            </div>
        </div>
     );
}

Info.propTypes = {
    result: PropTypes.object.isRequired
}
 
export default Info;