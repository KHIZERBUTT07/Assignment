import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/order" element={<Order/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/*" element={<NoPage/>} />
      </Routes>
    </Router>
  )
}
export default App