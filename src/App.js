import React, {useState, useEffect} from 'react'
import Header from './components/Header';
import Form from './components/Form.js';
import Info from './components/Info.js';
import Error from './components/Error.js';
import WeatherAnimation from './components/WeatherAnimation';

function App() {

  const [search , setSearch] = useState({
    city: '',
    country: ''
})

const [ consult , setConsult ] = useState(false);
const [ result, setResult ] = useState({}); 
const [ error, setError ] = useState(false);
const [ animation, setAnimation ] = useState(true);

const { city, country } = search;

useEffect(() =>{ 

  const ApiData = async () => {

    if( consult ){
      const ApiKey = 'b98cf227e2024a1d93480c9d3afca560';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${ApiKey}`;


      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      setResult(resultado)
      setConsult(false)
      setAnimation(false)

      if( resultado.cod === '404'){
        setError(true);
      } else {
        setError(false)
      }
    }
  }

  ApiData();

}, [consult]);


let componente;

if( animation ){
  componente = <WeatherAnimation />
} else if( error ){
  componente = <Error mensagge='Ciudad o país incorrecto' />
} else {
  componente = <Info 
                  result={result}
                />
}



 

  return (
    <main>
        <Header 
          title='Weather App'
        />

        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-8'>
          <div className=' mx-16 my-8'>
            <Form 
              setSearch={setSearch}
              search={search}
              setConsult={setConsult}
            />
          </div>
          <div className= ' mx-16 my-8'>
              {componente}
          </div>
        </div>


    </main>
  );

  }
export default App;
