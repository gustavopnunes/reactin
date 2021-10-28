import styled, { css } from "styled-components";
import { BsSun, BsMoon } from "react-icons/bs";

export const Container = styled.div``;

const generalIcons = css`
  color: var(--textColor);
  margin: 2px;
`;

export const SunIcon = styled(BsSun)`
  ${generalIcons}
`;
export const MoonIcon = styled(BsMoon)`
  ${generalIcons}
`;
