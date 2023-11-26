import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Users from './component/Users'
import CreateUser from './component/CreateUser'
import UpdateUser from './component/UpdateUser'
 
function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Users />}></Route>
        <Route path='/create' element={<CreateUser />}></Route>
        <Route path='/edit/:id' element={<UpdateUser />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
 
export default App
