import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";


function App() {

  return (
      <BrowserRouter>
          <header>
              <nav>
                  <h1>Jabarouter</h1>
                  <NavLink to="/">Home</NavLink>
                  &nbsp;
                  <NavLink to="/about">About</NavLink>
              </nav>
          </header>
        <main>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </BrowserRouter>
  )
}

export default App
