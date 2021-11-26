import styled from "styled-components";
import ColorsPalette from "styles/ColorsPalette";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: black;

  form {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    height: 65%;
    width: 100%;
    margin-bottom: 5%;
    & > input {
      opacity: 0.95;
      box-sizing: border-box;
    }

    & > input[type="text"],
    input[type="password"] {
      background-color: #333333;
      height: 55px;
      width: 90%;
      margin-top: 20px;
      border: none;
      border-radius: 5px;
      padding-left: 5%;
      font-family: "Roboto-light";
      font-size: 16px;
      color: ${ColorsPalette.white};

      :focus {
        outline: none;
      }
    }

    & > input[type="submit"] {
      margin-top: 80px;
      padding: 25px 80px;
      font-size: 22px;
      font-family: var(--secondary-font);
      color: ${ColorsPalette.white};
      background-color: ${ColorsPalette.emerald};
      border: none;
      border-radius: 20px;
    }

    & > input[type="submit"]:disabled {
      background-color: ${ColorsPalette.celadon};
    }

    .inputError {
      border: 1px solid rgba(255, 0, 0, 0.5) !important;
    }
  }

  p {
    color: white;
    font-family: var(--secondary-font);

    & > a {
      color: ${ColorsPalette.emerald};
    }
  }

  p:nth-child(3) {
    margin-top: 20%;
  }
`;

export default Container;
