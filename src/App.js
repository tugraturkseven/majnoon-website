import Main from "./pages/Main";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./pages/Detail";
import Basket from "./pages/Basket";
import Footer from "./components/Footer";
import ShippingLogin from "./pages/ShippingLogin";


function App() {
  return (
    <div className="min-h-screen" data-theme='light'>
      <Navbar></Navbar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path={"/details"} element={<Detail />} />
          <Route path={"/basket"} element={<Basket />} />
          <Route path={'/basketlogin'} element={<ShippingLogin />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>

  );
}

export default App;
