import styled from "styled-components";
import { FiHome, FiAward } from "react-icons/fi";
export const Container = styled.aside`
  grid-area: "SB";

  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  max-width: 7rem;
  height: 100vh;
  padding-top: 1rem;
  background: var(--primary);
  img {
    width: 48px;
    height: 42px;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 120px;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

export const ButtonHome = styled.button`
  width: 100px;
  height: 2rem;
  border-left-color: 1px solidvar(--blue);
  background: none;
  transition: 0.2s;
  &.active,
  &:hover {
    svg {
      stroke: var(--blue);
    }
  }

  &.active {
    &:before {
      height: 56px;
      border-radius: 8px;
      background-color: var(--blue);
      left: -7px;
      position: absolute;
      content: "";
    }
  }
`;
export const ButtonIconHome = styled(FiHome)`
  width: 2rem;
  height: 2rem;
  stroke: var(--white);
`;

export const ButtonLeaderBoard = styled.button`
  width: 100px;
  height: 2rem;
  background: none;
  transition: 0.2s;
  &.active,
  &:hover {
    svg {
      stroke: var(--blue);
    }
  }

  &.active {
    &:before {
      height: 56px;
      border-radius: 8px;
      background-color: var(--blue);
      left: -17px;
      position: absolute;
      content: "";
    }
  }
`;
export const ButtonIconLeaderBoard = styled(FiAward)`
  width: 2rem;
  height: 2rem;
  stroke: var(--white);
`;
