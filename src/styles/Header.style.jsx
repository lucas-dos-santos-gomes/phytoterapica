import styled from "styled-components";
import discount from "../assets/svg/discount-initial.svg";
import discountHover from "../assets/svg/discount-hover.svg";
import user from "../assets/svg/user-icon.svg";
import userHover from "../assets/svg/user-icon-green.svg";
import cart from "../assets/cart-icon.png";

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

  & div {
    display: flex;
    align-items: center;
  }

  & div:first-child {
    justify-content: center;
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

  & div:nth-child(2) {
    width: 250px;
    border: 1px solid #777;
    border-radius: 50px;
    cursor: pointer;
    transition: .3s;
  }

  & div p {
    color: #666;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-inline: auto;
  }

  & div p:nth-child(2) {
    display: none;
  }

  & div span {
    display: inline-block;
    background-image: url("${discount}");
    width: 24px;
    height: 24px;
    margin-inline: 5px;
  }

  & div:nth-child(2):hover {
    background-color: #98b020;
  }

  & div:nth-child(2):hover > p:first-child {
    display: none;
  }

  & div:nth-child(2):hover > p:nth-child(2) {
    display: inline-flex;
    text-transform: initial;
    color: #FFF;
  }

  & div:nth-child(2):hover span {
    background-image: url("${discountHover}");
  }

  & > span {
    cursor: pointer;
    background-repeat: no-repeat;
    background-position: center;
    width: 30px;
    height: 35px;
    transition: .3s;
  }

  & > span:nth-child(3) {
    background-image: url("${user}");
  }

  & > span:nth-child(3):hover {
    background-image: url("${userHover}");
  }

  & > span:nth-child(4) {
    background-image: url("${cart}");
  }
`;