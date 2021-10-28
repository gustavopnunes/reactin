import styled from "styled-components";

export const Container = styled.div`
  &:nth-child(2) {
    position: sticky;
    top: 64px;
    z-index: 0;
  }
  > div {
    padding: 12px;
    background-color: var(--panelColor);
    color: var(--textColor);
    border-radius: 5px;
    z-index: 1;

    .title {
      font-size: 16px;
    }
    ul {
      list-style: none;
      margin-top: 8px;
      color: var(--textColor);

      li {
        display: flex;
        align-items: center;
        color: var(--textColor);

        .bullet {
          display: inline-flex;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--color-link);
        }
        .news {
          display: flex;
          flex-direction: column;
          margin-left: 10px;

          .head {
            font-size: 14px;
            font-weight: 600;
            color: var(--textColor);
            cursor: pointer;

            a {
              text-decoration: none;
              color: inherit;
            }
          }
          .subtext {
            font-size: 12px;
            color: var(--subTextColor);
          }
        }

        & + li {
          margin-top: 10px;
        }
      }
    }
  }
`;
