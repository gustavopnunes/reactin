import styled from "styled-components";
import { FiMessageSquare } from "react-icons/fi";

export const Container = styled.div`
  background: var(--linkColor);
  padding: 0 16px;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;

  @media (min-width: 1180px) {
    display: none;
  }

  .user-nav {
    position: absolute;
    margin-top: 56px;
    left: 10px;
    width: 40px;
    height: 26px;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--textColor);
    border-radius: 5px;
    cursor: pointer;
    background-color: var(--panelColor);
    color: var(--textColor);
  }
`;

export const ProfileCircle = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid var(--textColor);
  flex-shrink: 0;
`;
export const SearchInput = styled.input`
  margin-left: 16px;
  width: 70%;
  background-color: var(--inputColor);
  color: var(--textColor);
  font-size: 14px;
  padding: 7.5px 8px;
  border: none;
  outline: none;
  border-radius: 2px;

  &:focus {
    /* background: var(--textColor); */
  }
`;

export const MessageIcon = styled(FiMessageSquare)`
  width: 24px;
  height: 24px;
  color: var(--iconColor);
  border-radius: 4px;
  flex-shrink: 0;
  margin: 0 17px;
`;
