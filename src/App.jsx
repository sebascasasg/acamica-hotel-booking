import Filters from './components/Filters.jsx'
import Hotels from './components/Hotels.jsx'
import { data } from './data.js'

function App() {
  return (
    <div>
      <header className='bg-green-700'>
        <div className='container mx-auto py-20'>
          <h1 className='mb-5 text-5xl font-bold'>Hotel Booking</h1>
          <p className='text-lg'>Búsqueda para hoteles desde el 11 de Febrero de 2020 hasta el 14 de Febrero de 2020 en Uruguay</p>
        </div>
        <Filters />
      </header>
      <main>
        <Hotels />
      </main>
    </div>
  )
}

export default App
