import './App.css'
import { data } from './data.js'

function App() {
  return (
    <main className='container mx-auto text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 bg-blue-100'>
      <div className='bg-green-100 md:bg-yellow-500 rounded-lg'>A</div>
      <div className='bg-green-100 rounded-lg w-3/5'>A</div>
      <div className='bg-green-100 rounded-lg'>A</div>
      <div className='bg-green-100 rounded-lg'>A</div>
      <div className='bg-green-100 rounded-lg'>A</div>
      <div className='bg-green-100 rounded-lg'>A</div>
      <div className='bg-green-100 rounded-lg'>A</div>
    </main>
  )
}

export default App
