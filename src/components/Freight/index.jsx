import frete from "../../assets/svg/frete-icon.svg";
import "./style.css";

export default function Freight() {
  return (
    <div className="FreteContainer">
      <img src={frete} alt="Imagem de caminhão de frete" />
      <p>Com mais R$ 200,00 o frete é por nossa conta!</p>
    </div>
  );
}