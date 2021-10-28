import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${(props) => props.theme.colorBackground};

  }
  html, body, #root {
    height: 100%;
    transition: 0.5s;
  }
  *, button, input {
    font-family: -apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Fira Sans,Ubuntu,Oxygen,Oxygen Sans,Cantarell,Droid Sans,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Lucida Grande,Helvetica,Arial,sans-serif;
  }
  :root {
    --textColor: ${(props) => props.theme.textColor};
    --subTextColor: ${(props) => props.theme.subTextColor};
    --feedHeaderColor: ${(props) => props.theme.feedHeaderColor};
    --panelColor: ${(props) => props.theme.panelColor};
    --linkedinColor: #0077b5;
    --inputColor: ${(props) => props.theme.inputColor};
    --iconColor: ${(props) => props.theme.iconColor};
    --hashtagColor: #7a8b98;
    --linkColor: #0073b1;
    --separatorColor: rgba(0,0,0,0.15);
  }

  button {
    cursor: pointer;

    &:hover {
      filter: brightness(90%);
      transition: 0.2s;
    }
  }

  .Modal {
    background-color: var(--panelColor);
    border: 2px solid gray;
    border-radius: 12px;
    font-size: 10px;
    position: fixed;
    top: 10%;
    bottom: 10%;
    right: 10%;
    left: 10%;
    text-align: center;
    max-width: 480px;
    height: 90%;
    max-height: 480px;
    outline: none;
    margin: 0 auto;
    color: var(--textColor);

    form {
      border-radius: 10px;
      padding: 24px;
      display: flex;
      flex-direction: column;
      align-items: center;

      h1 {
        margin-bottom: 24px;
      }

      p {
        margin: -16px 0 16px 0;
        color: var(--subTextColor);
        font-size: 0.7rem;
      }

      label {
        color: var(--textColor);
        cursor: pointer;
        font-size:14px;
        font-weight: bold;
        text-transform: uppercase;
      }
      input[type="file"] {
    display: none;
  }

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
    }

    input {
      background-color: var(--inputColor);
      color: var(--textColor);
      width: 90%;
      height: 32px;
      border: 1px solid rgba(0,0,0,.6);
      outline: none;
      padding: 8px;
      margin: 8px;
      border-radius: 5px;
    }

    button {
      width: 120px;
      height: 32px;
      background-color: var(--linkedinColor);
      color: #fff;
      font-weight: bold;
      border-radius: 4px;
      border: none;
    }
  }

  #sentinel {
    text-align: center;

    img {
      width: 48px;
    }
  }
`;
