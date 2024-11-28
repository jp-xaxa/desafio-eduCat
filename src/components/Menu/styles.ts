import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 2rem;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_200};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  position: relative;

  > section {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  position: absolute;
  z-index: 1;

  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;

  &[data-menu-is-open="true"] {
    transform: translateX(0);
  }
`

export const Header = styled.header`
  display: flex;
  justify-content: center;
  padding: 0 1.5rem 2rem;

  > img {
    height: 3.125rem;
  }
`

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;

  padding: 0 2rem;
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;

  > div {
    display: flex;
    flex-direction: column;

    > button:nth-child(1) {
      font-size: 0.875rem;
      color: ${({ theme }) => theme.COLORS.WHITE};

      opacity: 0.8;
      transition: 0.2s;

      &:hover {
        opacity: 1;
      }
    }

    > button:nth-child(2) {
      font-size: 0.875rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
      justify-content: start;

      opacity: 0.5;
      transition: 0.2s;

      &:hover {
        opacity: 1;
      }
    }
  }

  > img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    cursor: pointer;
  }
`

export const ButtonIcon = styled.button`
  position: absolute;
  z-index: 3;
  top: 16px;
  right: 16px;

  border: none;
  background-color: transparent;

  color: ${({ theme }) => theme.COLORS.WHITE};

  cursor: pointer;

  > svg {
    font-size: 1.5rem;
  }
`
