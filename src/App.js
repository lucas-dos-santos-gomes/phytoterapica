import Frete from './components/Freight/index.jsx';
import { Header } from "./components/Header/index.jsx";
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