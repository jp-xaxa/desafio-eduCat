import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.header`
  grid-area: header;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_200};
`

export const Content = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    padding: 0.625rem;
    gap: 0.625rem;
  }
`

export const Logo = styled.div`
  > img {
    height: 3.125rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    display: none;
  }
`

interface SearchStyles {
  $active: boolean
}

export const Search = styled.div<SearchStyles>`
  width: 50%;

  position: relative;

  > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    justify-content: center;

    padding: 0.75rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_200};
    color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};

    border-radius: 0.3125rem;

    border-radius: ${({ $active }) =>
      $active ? "0.3125rem 0.3125rem 0 0" : "0.3125rem"};

    > svg {
      font-size: 1.25rem;
    }

    > input {
      width: 100%;
      color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
      background: transparent;
      border: none;

      font-size: 1rem;

      &::placeholder {
        color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY};
        font-size: 1rem;
      }
    }
  }

  .options {
    width: 100%;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_200};
    color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};

    position: absolute;
    z-index: 3;

    display: flex;
    flex-direction: column;
    text-align: start;

    border-radius: 0 0 0.3125rem 0.3125rem;
    border-top: ${({ theme, $active }) =>
      $active ? `1px solid ${theme.COLORS.GRAY_200}` : "none"};
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    width: 100%;

    > div {
      padding: 0.5rem;

      > svg {
        font-size: 1rem;
      }

      > input {
        font-size: 0.875rem;

        &::placeholder {
          font-size: 0.875rem;
        }
      }
    }
  }
`

export const Option = styled.button`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: transparent;
  border: none;

  > div {
    display: flex;
    gap: 0.3125rem;
    align-items: start;
    padding: 0.3125rem;

    .title {
      font-size: 1rem;
      color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY};
    }

    > div {
      > span {
        font-size: 0.75rem;
        color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY};
        opacity: 0.8;
      }
    }
  }

  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
    border-radius: 0.3125rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    > div {
      flex-direction: column;
      .title {
        font-size: 0.75rem;
      }

      > div {
        > span {
          font-size: 0.625rem;
        }
      }
    }
  }
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

  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    display: none;
  }
`

export const ButtonIcon = styled.button`
  display: none;

  border: none;
  background-color: transparent;

  color: ${({ theme }) => theme.COLORS.WHITE};

  cursor: pointer;

  > svg {
    font-size: 1.5rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    display: block;
  }
`
