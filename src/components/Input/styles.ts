import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_200};
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
  padding: 1rem 1.25rem;

  > input {
    width: 100%;

    background: transparent;

    border: none;
    color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
    font-size: 1rem;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY};
    }
  }

  &:focus-within {
    border: 1px solid ${({ theme }) => theme.COLORS.SECONDARY_200};
  }

  > svg {
    margin-right: 1rem;
    font-size: 1.25rem;
  }
`
