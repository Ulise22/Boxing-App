import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Training from './components/training/Training';
import Students from './components/students/Students';
import Discount from './components/discount/Discount';
import Buy from './components/buy/Buy';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Home />
        <Training />
        <Students />
        <Discount />
        <Buy />
        <Footer />
      </div>
    </div>
  );
}

export default App;
