import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 24px;
  overflow: hidden;

  h1 {
    color: var(--textColor);
    font-weight: 500;
    font-size: ${(props) => (props.login ? "2rem" : "1.6rem")};
    margin: ${(props) => (props.login ? "0 32px" : "0 16px")};
    text-align: ${(props) => (props.login ? "left" : "center")};

    @media (min-width: 720px) {
      text-align: center;
    }
  }

  p {
    color: var(--textColor);
    text-align: left;
    margin: 8px 32px;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;

    @media (min-width: 720px) {
      text-align: center;
    }
  }

  form {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: ${(props) => (props.login ? "280px" : "300px")};
    margin: 0 auto;

    input {
      width: 100%;
      max-width: 480px;
      color: var(--textColor);
      background-color: var(--inputColor);
      height: 44px;
      padding: 8px;
      border-radius: 4px;
      outline: none;
      border: 1px solid rgba(0, 0, 0, 0.6);
      margin-top: ${(props) => (props.login ? "16px" : "0")};
    }

    input:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 30px var(--inputColor) inset;
      box-shadow: 0 0 0 30px var(--inputColor) inset;
    }

    input:-webkit-autofill {
      -webkit-text-fill-color: var(--textColor);
    }

    button {
      position: absolute;
      background-color: var(--linkColor);
      border: none;
      border-radius: 20px;
      width: 80%;
      max-width: 320px;
      height: 40px;
      color: #fff;
      font-size: 1rem;
      font-weight: bold;
      bottom: 0;
    }

    .label-container {
      display: inline-block;
      width: 100%;
      max-width: 480px;
      text-align: left;
      margin-left: 4px;
      margin-bottom: 2px;
      color: var(--textColor);

      &:nth-of-type(2) {
        margin-top: 16px;
      }
    }

    .label-container {
      display: ${(props) => props.login && "none"};
    }

    .invalid {
      border: 1px solid red;
    }
  }

  .error-message {
    width: 100%;
    max-width: 480px;
    color: red;
    font-size: 14px;
    text-align: left;
  }

  .terms {
    max-width: 480px;
    font-size: 12px;
    margin: 8px;
    color: var(--textColor);

    span {
      color: var(--linkColor);
      font-weight: bold;
      cursor: pointer;
    }
  }

  .registered-user {
    margin-top: 24px;
    color: var(--textColor);

    span {
      font-weight: bold;
      color: var(--linkColor);
      cursor: pointer;
    }
  }

  footer {
    position: fixed;
    width: 100%;
    bottom: 0;

    ul {
      list-style: none;
      display: flex;
      color: var(--textColor);
      align-items: center;
      justify-content: center;
      position: relative;
      bottom: 0;

      li {
        margin: 8px;
        font-size: 10px;
        cursor: pointer;
      }
    }
  }
`;
