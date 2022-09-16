import Header from './components/Header';
import Form from './components/Form.js';

function App() {
  return (
    <main>
        <Header 
          title='Weather App'
        />

        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-8'>
          <div className=' mx-16 my-8'>
            <Form />
          </div>
          <div className= ' mx-16 my-8'>
            2
          </div>
        </div>

    </main>
  );
}

export default App;
