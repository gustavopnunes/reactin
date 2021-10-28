import styled, { css } from "styled-components";
import { GrLinkedin } from "react-icons/gr";
import { AiFillHome, AiOutlineBell, AiFillCaretDown } from "react-icons/ai";

export const Container = styled.header`
  background-color: var(--feedHeaderColor);
  padding: 0 30px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: none;
  z-index: 2;

  @media (min-width: 1180px) {
    display: block;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  max-width: 1128px;
  margin: 0 auto;
  height: 52px;

  .left,
  .right nav {
    display: flex;
    align-items: center;
  }

  .right nav {
    height: 100%;
    position: relative;

    button {
      background-color: transparent;
      border: 0;
      outline: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-width: 90px;
      min-height: 100%;
      color: var(--iconColor);
      cursor: pointer;

      &:hover {
        color: var(--whiteColor);
      }
      &.active {
        border-bottom: 2px solid var(--whiteColor);
      }
    }
  }
  .user-nav {
    width: 64px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--textColor);
    border-radius: 5px;
    cursor: pointer;
    position: absolute;
    margin-top: 80px;
    right: 68px;
    background-color: var(--panelColor);
    color: var(--textColor);
    z-index: 10;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

const generalIconCSS = css`
  width: 24px;
  height: 24px;
`;

export const LinkedinIcon = styled(GrLinkedin)`
  height: 34px;
  width: 34px;
  color: var(--color-linkedin);
  background-color: #fff;
  border-radius: 4px;
  flex-shrink: 0;
`;
export const SearchInput = styled.input`
  margin-left: 12px;
  background-color: var(--inputColor);
  border: none;
  color: var(--texrtColor);
  font-size: 14px;
  padding: 7.5px 8px;
  outline: none;
  border-radius: 2px;

  &:focus {
    background-color: #c1c1c1;
  }
`;

export const HomeIcon = styled(AiFillHome)`
  ${generalIconCSS}
`;
export const NotificationsIcon = styled(AiOutlineBell)`
  ${generalIconCSS}
`;
export const ProfileCircle = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid var(--color-icons);
`;
export const CaretDownIcon = styled(AiFillCaretDown)`
  width: 16px;
  height: 16px;
`;
