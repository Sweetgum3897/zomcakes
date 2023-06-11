import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import NavBar from './NavBar.js';
import MainMint from './MainMint.js';
import FAQ from './FAQ';
import Footer from './Footer';
  window.Buffer = window.Buffer || require("buffer").Buffer;

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
