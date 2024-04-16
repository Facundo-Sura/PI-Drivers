import Landing from './views/landing/Landing';
import {Route, Routes} from "react-router-dom";
import Home from './views/home/Home';
import Detail from "./views/detail/Detail";
import FormPage from "./views/formPage/FormPage"

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/detailPage/:id' element={<Detail/>} />
        <Route path='/formPage' element={<FormPage/>} />
      </Routes>
    </div>
  )
}

export default App
