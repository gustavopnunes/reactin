import styled from "styled-components";
import { FaHashtag } from "react-icons/fa";

export const Container = styled.div`
  position: sticky;
  top: 64px;

  > div {
    background-color: var(--panelColor);
    margin-top: 8px;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 600;
    padding: 8px 12px 16px;
    color: var(--textColor);
    border-radius: 5px;
    .title {
      color: var(--linkColor);
      margin-bottom: 10px;
    }
    .tag {
      display: flex;
      align-items: center;
      padding: 3.5px 0;
    }
  }
`;

export const HashtagIcon = styled(FaHashtag)`
  width: 16px;
  height: 16px;
  color: var(--hashtagColor);
  margin-right: 8px;
`;
