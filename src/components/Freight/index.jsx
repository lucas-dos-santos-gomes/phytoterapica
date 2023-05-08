import frete from "../../assets/svg/frete-icon.svg";
import { FreteContainer } from "./style.js";

export default function Freight() {
  return (
    <FreteContainer>
      <img src={frete} alt="Imagem de caminhão de frete" />
      <p>Com mais R$ 200,00 o frete é por nossa conta!</p>
    </FreteContainer>
  );
}