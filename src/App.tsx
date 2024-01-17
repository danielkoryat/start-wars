import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./componants/Navbar/Navbar";
import './App.css'
import routes from "./routes";
import dotenv from 'dotenv';


function App() {
  dotenv.config();

  return (
    <>
        <Router>
          <header>
            <Navbar />
          </header>
          <Routes>
            {routes.map((route) => <Route path={route.path} element={<route.element />} />)}
          </Routes>
        </Router>
    </>
  )
}

export default App
