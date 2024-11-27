import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;

  padding: 0.75rem 1.375rem;

  border-radius: 0.5rem;

  background-color: ${({ theme }) => theme.COLORS.PRIMARY_200};
  color: ${({ theme }) => theme.COLORS.WHITE};

  cursor: pointer;

  transition: 0.4s;

  > svg {
    font-size: 1.125rem;
  }

  > button {
    background: transparent;
    border: none;

    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 1.125rem;
    white-space: nowrap;
    cursor: pointer;
  }

  /* O hover só será aplicado se o botão NÃO estiver desativado */
  &:hover {
    background-color: ${({ theme }) => theme.COLORS.PRIMARY_100};
  }
`
