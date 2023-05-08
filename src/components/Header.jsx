import logo from "../assets/logo-phy1.png";
import searchIcon from "../assets/svg/search-icon.svg";
import { HeaderStyle, InputContainer } from "../styles/Header.style.jsx";

export function Header() {
  return (
    <HeaderStyle>
      <img src={logo} alt="Logo da loja" />
      <InputContainer>
        <div>
          <img src={searchIcon} alt="Ícone de pesquisa" />
          <input type="text" placeholder="O que você procura?" />
        </div>
        <div>
          <p>-5% na primeira compra</p>
          <span></span>
        </div>
        <span className="ImageUser"></span>
        <span className="ImageCart"></span>
      </InputContainer>
    </HeaderStyle>
  );
}