import Footer from "./components/Layout/Footer";
import Navbar from "./components/Layout/Navbar";
import GithubContextProvider from './context/github/GithubContextProvider';
import { BrowserRouter as Router , Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import User from "./pages/User";

function App() {
  return (
    <GithubContextProvider>
      <Router>
        <div className="flex flex-col justify-between h-screen ">
          <Navbar/>
          <main className="m-auto container flex-1">
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/users/:login' element={<User />} />
                <Route path='/about' element={<About />} />
                <Route path='*' element={<NotFound />} />

              </Routes>
          </main>
          <Footer/>
        </div>
      </Router>
    </GithubContextProvider>
  );
}

export default App;
