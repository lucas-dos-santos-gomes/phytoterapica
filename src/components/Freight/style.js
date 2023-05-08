import styled from "styled-components";

export const FreteContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 35px;
  border-bottom: 1px solid #CCC;
  background-color: #F5F5F5;


  & img {
    filter: brightness(0.3);
    width: 25px;
    padding-inline: 14px;
  }

  & p {
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: 1px;
    font-size: 13px;
    color: #3B3B3B;
  }
`;