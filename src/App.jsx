
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Register from './components/Register'
import Navbar from './components/Navbar'
import Home from './components/Home'
import ChapterSelectionPage from './components/ChapterSelection'
import ChapterPage from './components/ChaptePage'

function App() {
  

  return (
    <>
    <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/chapterselection' element={<ChapterSelectionPage></ChapterSelectionPage>}></Route>
        <Route path='/chapter/:id' element={<ChapterPage></ChapterPage>}></Route>
      </Routes>
    </>
  )
}

export default App
