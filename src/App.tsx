import './App.css'
import Home from './Components/Pages/Home';
import Setting from './Components/Pages/Setting';
import SideBars from './Components/Pages/SideBars'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
      <div className='w-full h-[100vh] bg-gray-50'>
        <div className="md:max-w-[1700px]  max-w-[100%] md:flex-row flex-col flex items-center h-full md:w-[95%] mx-auto">
          <div className="md:h-full h-auto md:w-auto w-full">
            <SideBars/>
          </div>
          <div className=" h-full flex-1">
              <BrowserRouter>
                <Routes>
                  <Route path='/' element={<Home/>}></Route>
                </Routes>
              </BrowserRouter>
          </div>
        </div>
      </div>
  )
}

export default App
