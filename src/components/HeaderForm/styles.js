import styled from "styled-components";

export const Container = styled.header`
  height: 80px;
  display: flex;

  div {
    display: flex;
    align-items: center;
    width: 80%;
    margin: 8px auto;
    justify-content: space-between;
  }
  .logo {
    font-family: "PT Sans", sans-serif;
    font-size: 1.4rem;
    color: var(--color-link);

    @media (min-width: 960px) {
      font-size: 2.6rem;

      .emphasis {
        width: 38px;
        height: 38px;
      }
    }
  }

  .emphasis {
    background-color: var(--color-link);
    color: #fff;
    margin-left: 2px;
    width: 22px;
    height: 22px;
    line-height: 0.8;
    border-radius: 2px;
    padding: 1px;
    text-align: center;
    display: inline-block;
  }
`;
