import { Routes, Route } from 'react-router-dom'
import ProdutoPage from './components/ProdutoPage'
import Home from './Routes/Home'
import Saias from './Routes/Saias'
import Blusas from './Routes/Blusas'
import Acessorios from "./Routes/Acessorios"

import './App.css'
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produto/:nome" element={<ProdutoPage />} />
        <Route path='/saias' element={<Saias/>}/>
        <Route path='/Acessorios' element={<Acessorios/>}/>
        <Route path='/Blusas' element={<Blusas/>}/>
      </Routes>
    </>
  )
}
