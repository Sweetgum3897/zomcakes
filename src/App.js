import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import NavBar from './NavBar.js';
import MainMint from './MainMint.js';
import FAQ from './FAQ';
import Footer from './Footer';
<<<<<<< HEAD
  window.Buffer = window.Buffer || require("buffer").Buffer;
=======
>>>>>>> 0c2e349e6265b04f80dbbed780ebd19940c3a15b

function App() {

  return (
    <div className='App'>
      <header className='App-header'> 
      <NavBar />
      </header>
      <div className="App-background">
        <MainMint />
      <FAQ />
        </div>
        <Footer />
    </div> 
  );
}

export default App;
