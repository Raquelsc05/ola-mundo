import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from './Paginas/Inicio'
import SobreMim from './Paginas/Sobre Mim'
import Menu from './componentes/Menu'
import Footer from './componentes/Footer'
import PaginaPadrao from 'componentes/PaginaPadrao'
import Post from 'Paginas/Post'
import NaoEncontrada from 'Paginas/PaginaNaoEncontrada'
import ScrollToTop from 'componentes/ScrollToTop'

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />

      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/SobreMim" element={<SobreMim />} />
        </Route>
        <Route path="posts/:id/*" element={<Post />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default AppRoutes
