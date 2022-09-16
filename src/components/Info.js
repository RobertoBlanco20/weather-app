import React from 'react';

const Info = ({result}) => {

    const {main, name} = result;
    const kelvin = 273.15;

    if( !main ) return null;

    return ( 
        <div>
            <h2 className="text-4xl text-center font-bold">{name}</h2>
            <p>Temperatura: { parseFloat( main.temp - kelvin, 10 ).toFixed(1)} <span>&#x2103;</span></p>
            
            <div>
                <p>Temperatura Maxima: { parseFloat( main.temp_max - kelvin, 10 ).toFixed(1)}</p>
                <p>Temperatura Minima: { parseFloat( main.temp_min - kelvin, 10 ).toFixed(1)}</p>
                <p>Sensación Termica: { parseFloat( main.feels_like - kelvin, 10 ).toFixed(1)}</p>
            </div>
        </div>
     );
}
 
export default Info;