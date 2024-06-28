
import './App.css'
import Priceoptions from './Components/Priceoptions/Priceoptions'
import Responsivenav from './Components/Responsivenav/Responsivenav'
// import Daisynavbar from './Components/DaisyNavbar/Daisynavbar'

function App() {


  return (
    <>
    <Responsivenav></Responsivenav>
      {/* <Daisynavbar></Daisynavbar> */}
      <h1 className='text-7xl bg-slate-500'>Vite + React</h1>
      <Priceoptions></Priceoptions>
      
    </>
  )
}

export default App
