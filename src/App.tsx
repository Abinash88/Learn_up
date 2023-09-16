import './App.css'
import Home from './Components/Pages/Home';
import Setting from './Components/Pages/Setting';
import SideBars from './Components/Pages/SideBars'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
      <div className='w-full h-[100vh]'>
        <div className="max-w-[1700px] flex items-center h-full w-[95%] mx-auto">
          <div className="h-full">
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
