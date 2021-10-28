import styled from "styled-components";

export const Container = styled.div`
  padding-bottom: 12px;
  background-color: var(--panelColor);
  color: var(--textColor);
  border-radius: 5px;

  .profile-cover {
    width: 100%;
    height: 54px;
  }
  .profile-picture {
    box-shadow: 0px 0px 4px var(--textColor);
    width: 72px;
    height: 72px;
    border-radius: 50%;
    display: flex;
    margin: -38px auto 12px;
  }
  h1 {
    font-size: 16px;
    font-weight: 600;
    text-align: center;
  }
  h2 {
    margin-top: 4px;
    font-size: 12px;
    font-weight: 400;
    text-align: center;
  }
  .separator {
    width: 100%;
    border-bottom: 1px solid var(--separatorColor);
    margin: 16px 0 12px;
  }
  .key-value {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    margin: 0 12px;
    font-weight: 600;

    .value {
      color: var(--color-link);
    }
  }
`;
