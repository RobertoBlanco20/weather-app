import React, {useState} from 'react'

import Error from './Error'

const Form = ({search, setSearch, setConsult}) => {


    const [ error , setError ] = useState(false)

    const {city, country} = search;

    const handleChange = e => {
        setSearch({
            ...search,
            [ e.target.name ] : e.target.value}
            )
    }

    const handleSubmit = e => {
        e.preventDefault();

        // Validar el form
        if( city.trim() === '' || country.trim() === ''){
            setError(true)
            return
        }

        setError(false)


        //Enviar los datos al componente principal para consultar la API
        setConsult(true)
    }



    
    return ( 
        <form 
            onSubmit={handleSubmit}
            className='flex flex-col w-full'
        >

            { error ? <Error mensagge='Todos los campos son obligatorios' /> : null }
            <label id='ciudad' className='w-full my-2'>Ciudad</label>
            <input
                onChange={ handleChange } 
                type='text'
                name='city' 
                id='city' 
                value={city} 
                className='w-full h-8 text-neutral-700' 
            />

            <label htmlFor='pais' className='w-full my-2'>Pais</label>
            <select 
                onChange={handleChange}
                type='text'
                name='country' 
                id='country' 
                value={country} 
                className='w-full h-8 text-neutral-700' 
                >
                    <option value="">-- Seleccione un país --</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                    <option value='URU'>Uruguay</option>
                    <option value='PY'>Paraguay</option>
                    <option value='CH'>Chile</option>
                    <option value='BR'>Brasil</option>
            </select>
            

            <button type='submit' className='w-full font-bold h-10 my-8 bg-cyan-400 text-white rounded font-bolder hover:bg-cyan-500'>Buscar</button>
        </form>
     );
}
 
export default Form;