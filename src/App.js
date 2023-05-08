import Frete from './components/Freight.jsx';
import { Header } from "./components/Header.jsx";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Frete />
      <header>
        <Header />
      </header>
    </div>
  );
}