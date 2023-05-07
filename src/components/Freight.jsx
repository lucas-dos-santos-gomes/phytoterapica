import frete from "../assets/svg/icon-frete.svg";
import "../styles/Freight.css";

export default function Freight() {
  return (
    <div className="Teste">
      <img src={frete} alt="Imagem de caminhão de frete" />
      <p>Com mais R$ 200,00 o frete é por nossa conta!</p>
    </div>
  );
}