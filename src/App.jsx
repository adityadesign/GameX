import Navbar from "./components/navbar/Navbar"
import Home from "./pages/Home"
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
