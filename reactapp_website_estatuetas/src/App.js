import { BrowserRouter, Routes, Route } from "react-router-dom";
//import PrivateRoute from './utils/PrivateRoute';
import LandingPage from "./screens/LandingPage/LandingPage.js";
import PageNotFound from "./screens/PageNotFound/PageNotFound.js";
import AdminPage from "./screens/AdminPage/AdminPage.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rotas Públicas / Rotas que podem ser acedidos por todos os utilizadores*/}
        <Route path="/" element={<LandingPage />} />
        <Route path="/Produtos" element={<LandingPage />} />
        <Route path="/Categorias" element={<LandingPage />} />
        <Route path="/Contact" element={<LandingPage />} />

        {/* Rotas que não existem */}
        <Route path="*" element={<PageNotFound />} />

        {/* Rotas Privadas Rotas que só podem ser acedidas pelo Administrador */}
        {/*<Route element={<PrivateRoute />} >*/}
        <Route path="/admin" element={<AdminPage />} />
        {/*</Routes></Route>*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
