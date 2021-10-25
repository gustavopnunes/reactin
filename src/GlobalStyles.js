import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100%;
    width: 100%;
    background: var(--color-background);
  }
  *, button, input {
    font-family: -apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Fira Sans,Ubuntu,Oxygen,Oxygen Sans,Cantarell,Droid Sans,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Lucida Grande,Helvetica,Arial,sans-serif;
  }
  :root {
    --color-header: #283e4a;
    --color-linkedin: #0077b5;
    --color-input: #e1e9ee;
    --color-icons: #c7d1d8;
    --color-hashtag: #7a8b98;
    --color-background: #f5f5f5;
    --color-ad-text: #434649;
    --color-panel: #fff;
    --color-link: #0073b1;
    --color-black: rgba(0,0,0,.9);
    --color-gray: rgba(0,0,0,.6);
    --color-separator: rgba(0,0,0,0.15);
    --color-white: #fff;
  }

  button {
    cursor: pointer;

    &:hover {
      filter: brightness(90%);
      transition: 0.2s;
    }
  }

  .Modal {
    background-color: orange;
    font-size: 10px;
    position: fixed;
    top: 20%;
    bottom: 10%;
    right: 10%;
    left: 10%;
    text-align: center;
    max-width: 480px;
    max-height: 480px;
    border: none;
    outline: none;
    margin: 0 auto;

    form {
      
      /* border: 1px solid rgba(0,0,0,.6); */
      border-radius: 10px;
      padding: 24px;
      display: flex;
      flex-direction: column;
      align-items: center;

      h1 {
        margin-bottom: 24px;
      }

      label {
        color: rgba(0,0,0,.6);
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
      width: 90%;
      height: 32px;
      border: 1px solid rgba(0,0,0,.6);
      outline: none;
      padding: 8px;
      margin: 8px;
      border-radius: 5px;
    }
  }

  #sentinel {
    text-align: center;

    img {
      width: 48px;
    }
  }
`;
