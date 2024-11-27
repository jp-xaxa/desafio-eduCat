import styled from "styled-components"

export const Container = styled.header`
  grid-area: header;

  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_200};
  padding: 0.625rem 2rem;

  display: flex;
  gap: 1.5rem;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.div`
  > img {
    height: 3.125rem;
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
    align-items: end;
    padding: 0.3125rem;

    .title {
      font-size: 1rem;
      color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY};
    }

    > span {
      font-size: 0.75rem;
      color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY};
      opacity: 0.8;
    }
  }

  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
    border-radius: 0.3125rem;
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
`
