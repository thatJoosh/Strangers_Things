import './App.css'
import { Routes, Route } from 'react-router-dom'
import Posts from './pages/Posts'
import Home from './pages/Home'
import Profile from './pages/Profile'
import NavBar from './components/NavBar'

function App() {


  return (

    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/posts" element={<Posts />} />
    </Routes>
    </>
  )
}

export default App
