import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import Header from "./comps/Header";
import Context from "./comps/Context";
//import Cart from "./comps/Cart";
// import Home from "./comps/Home";

const Home = lazy(() => import("./comps/Home"));
const Cart = lazy(() => import("./comps/Cart"));

function App() {
  return (
    <div className="App">
      <Context>
        <BrowserRouter>
          <Header />
          <Suspense fallback={<h2>Loading...</h2>}>
            <Routes>
              <Route path="/" element={<Home />} exact />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </Context>
    </div>
  );
}

export default App;
