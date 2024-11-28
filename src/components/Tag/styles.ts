import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  padding: 0.375rem 0.75rem;

  border: 2px solid ${({ theme }) => theme.COLORS.TEXT_SECONDARY};
  border-radius: 999px;

  font-size: 0.75rem;
  white-space: nowrap;
  color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY};

  > svg {
    color: ${({ theme }) => theme.COLORS.SECONDARY_100};
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
  }
`
