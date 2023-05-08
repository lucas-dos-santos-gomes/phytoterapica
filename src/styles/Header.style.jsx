import styled from "styled-components";
import searchIcon from "../assets/svg/search-icon.svg";

export const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 4%;
  border-bottom: 1px solid #CCC;

  & > img {
    width: 30vw;
    max-width: 280px;
    min-width: 180px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  gap: 30px;

  & div:first-child {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 260px;
    padding: 7px 0 7px 15px;
    border: 1px solid #CCC;
    border-radius: 50px;
  }

  & div img {
    width: 16px;
    height: 16px;
  }

  & div input {
    margin-left: 10px;
  }
  
  & div input:focus {
    outline: 0;
  }

  & div input::placeholder {
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: 1px;
  }

  & div span {
    width: 24px;
    height: 24px;
  }
`;