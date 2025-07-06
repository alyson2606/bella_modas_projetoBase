import { Routes, Route } from 'react-router-dom'
import ProdutoPage from './components/ProdutoPage'
import Home from './Routes/Home'
import './App.css'
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produto/:nome" element={<ProdutoPage />} />
      </Routes>
    </>
  )
}
