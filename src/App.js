import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import Home from "./components/Home"
import Features from "./components/Features";
import Products from "./components/Products";
import TandC from "./components/terms&condition";

import React from 'react'

const App = () => {
  return (
  
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Features" element={<Features />} />
      <Route path="/Products" element={<Products />} />
      <Route path="/TandC" element={<TandC />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App