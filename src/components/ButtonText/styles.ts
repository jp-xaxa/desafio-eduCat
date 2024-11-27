import styled from "styled-components"

export const Container = styled.button`
  display: flex;
  align-items: center;

  background: none;
  border: none;

  color: ${({ theme }) => theme.COLORS.WHITE};
  white-space: nowrap;
  font-size: 1rem;

  cursor: pointer;

  > svg {
    margin-right: 0.5rem;
  }

  &.clear {
    color: ${({ theme }) => theme.COLORS.ACCENT_100};
    font-size: 0.875rem;
  }

  &.back {
    color: ${({ theme }) => theme.COLORS.PRIMARY_200};
    font-size: 1rem;
  }

  &.linkedin {
    color: ${({ theme }) => theme.COLORS.PRIMARY_100};
  }

  &.github {
    color: ${({ theme }) => theme.COLORS.BLACK};
  }
`
