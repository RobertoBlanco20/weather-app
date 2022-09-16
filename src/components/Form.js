import React, {useState} from 'react'

const Form = () => {

    const [search , setSearch] = useState({
        city: '',
        country: ''
    })

    const {city, country} = search;

    const handleChange = e => {
        setSearch({
            ...search,
            [ e.target.name ] : e.target.value}
            )
    }



    
    return ( 
        <form className='flex flex-col w-full'>
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
                    <option value='UY'>Uruguay</option>
                    <option value='PY'>Paraguay</option>
                    <option value='CH'>Chile</option>
                    <option value='BR'>Brasil</option>
            </select>
            

            <button type='submit' className='w-full h-10 my-8 bg-cyan-400 text-white rounded font-bolder'>Buscar</button>
        </form>
     );
}
 
export default Form;