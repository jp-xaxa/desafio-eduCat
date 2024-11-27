import styled from "styled-components"

interface InputCheckStyles {
  $checkout: boolean
}

export const Container = styled.div<InputCheckStyles>`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 0.625rem;

  cursor: pointer;

  > div {
    min-width: 1rem;
    min-height: 1rem;

    border: 1px solid ${({ theme }) => theme.COLORS.ACCENT_200};
    border-radius: 50%;

    background-color: ${({ theme, $checkout }) =>
      $checkout ? theme.COLORS.ACCENT_100 : "transparent"};
  }

  > span {
    font-size: 1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY};
  }

  &:disabled {
    opacity: 0.6;
  }
`
