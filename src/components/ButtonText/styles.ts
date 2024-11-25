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
`
