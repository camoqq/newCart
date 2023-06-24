import { BrowserRouter, Route, Routes } from "react-router-dom";

import Cart from "./comps/Cart";
import Header from "./comps/Header";
import Context from "./comps/Context";
import Home from "./comps/Home";

function App() {
  return (
    <div className="App">
      <Context>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </Context>
    </div>
  );
}

export default App;
