import logo from "../assets/logo-phy1.png";
import searchIcon from "../assets/svg/search-icon.svg";
import { HeaderStyle } from "../styles/Header.style.jsx";

export function Header() {
  return (
    <HeaderStyle>
      <img src={logo} alt="Logo da loja" />
      <div className="InputsContainer">
        <div className="InputBox">
          <img src={searchIcon} alt="Ícone de pesquisa" />
          <input type="text" placeholder="O que você procura?" />
        </div>
        <div className="DiscountBox">
          <p>-5% na primeira compra</p>
          <span className="ImageDiscount"></span>
        </div>
        <span className="ImageUser"></span>
        <span className="ImageCart"></span>
      </div>
    </HeaderStyle>
  );
}