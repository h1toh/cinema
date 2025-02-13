import Header from "./components/Header"

import Home from "./pages/Home"
import Assentos from "./pages/Assentos"
import Ingressos from "./pages/Ingressos"
import Sessoes from "./pages/Sessoes"
import Pagamento from "./pages/Pagamento"
import Filme from "./pages/Filme"

import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/filme/:route" element={<Filme />} />
          <Route path="/sessoes/:filme" element={<Sessoes />} />
          <Route path="/assentos/:sessao" element={<Assentos />} />
          <Route path="/ingressos/:sessao" element={<Ingressos />} />
          <Route path="/pagamento/:sessao" element={<Pagamento />} />
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App