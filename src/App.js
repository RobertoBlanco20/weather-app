import React, {useState, useEffect} from 'react'
import Header from './components/Header';
import Form from './components/Form.js';
import Info from './components/Info.js';

function App() {

  const [search , setSearch] = useState({
    city: '',
    country: ''
})

const [ consult , setConsult ] = useState(false);
const [ result, setResult ] = useState({}); 

const { city, country } = search;

useEffect(() => {

  if( consult ){
      const ApiData = async () => {
      const ApiKey = 'b98cf227e2024a1d93480c9d3afca560';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${ApiKey}`;
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      setResult(resultado)
  }
  ApiData();
  }

}, [consult])

 

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
            <Info 
              result={result}
            />
          </div>
        </div>

    </main>
  );
}

export default App;
