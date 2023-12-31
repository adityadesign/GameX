import Navbar from "./components/navbar/Navbar"
import GameDetail from "./pages/GameDetail"
import Home from "./pages/Home"
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/game/:id" element={<GameDetail />}/>
      </Routes>
    </>
  )
}

export default App
