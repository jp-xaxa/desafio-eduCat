import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-areas:
    "header header"
    "aside content ";
  grid-template-rows: max-content auto;
  grid-template-columns: 20% 80%;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    grid-template-columns: auto;

    grid-template-areas:
      "header"
      "content";
  }
`

export const Content = styled.main`
  grid-area: content;
  height: 100%;
  overflow-y: auto;

  > section {
    max-width: 1440px;
    margin: 0 auto;
    padding: 1rem 2.5rem;

    > div {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      margin-bottom: 1rem;

      > h1 {
        font-size: 2rem;
        color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
      }
    }

    > section {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      justify-items: center;
      gap: 1.25rem;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    padding: 0.5rem 0.625rem;

    > section {
      grid-template-columns: 1fr;
    }

    > div {
      justify-content: space-between;
      > h1 {
        font-size: 1.5rem;
      }
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    position: relative;

    padding: 0.5rem 0.625rem;

    > div {
      justify-content: space-between;
    }
  }
`

export const Aside = styled.div`
  grid-area: aside;

  border-right: 2px solid ${({ theme }) => theme.COLORS.GRAY_200};
  margin: 1rem 0;
  padding: 0 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  overflow-y: auto;

  > h2 {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
    text-align: center;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: none;
  }
`

export const ButtonIcon = styled.button`
  display: none;

  border: none;
  background-color: transparent;

  color: ${({ theme }) => theme.COLORS.BLACK};

  cursor: pointer;

  > svg {
    font-size: 1.5rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: block;
  }
`

export const AsideMenu = styled.aside`
  position: absolute;
  z-index: 2;

  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 0.5rem;
  box-shadow: 0px 4px 8px rgba(66, 66, 66, 0.2);
  padding: 0.625rem;

  > h2 {
    margin-bottom: 0.625rem;
  }

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.625rem;

    > div {
      display: flex;
      flex-direction: column;
      gap: 0.3125rem;
    }
  }
`
