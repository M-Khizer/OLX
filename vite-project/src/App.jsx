import './App.css'
import { Route,Routes } from 'react-router-dom'
import AllProducts from './Components/AllProducts'
import Navbar from './Components/Navbar'
import IndividualProduct from './Components/IndividualProduct'
function App() {

  return (
    <>
      <Navbar/>

      <Routes>
        <Route index element={<AllProducts/>}/>
        <Route path='/productdetails/:id' element={<IndividualProduct/>}/>
      </Routes>
    </>
  )
}

export default App
