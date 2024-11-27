import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 300px;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 8px rgba(66, 66, 66, 0.2);

  cursor: pointer;

  transition: 0.6s;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0px 6px 12px rgba(66, 66, 66, 0.3);
  }

  > img {
    width: 100%;
    border-radius: 0.5rem 0.5rem 0 0;
  }

  > div {
    width: 100%;
    height: 100%;
    padding: 0.625rem;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_200};
    border-radius: 0 0 0.5rem 0.5rem;
    transition: background-color 0.3s ease;

    display: flex;
    flex-direction: column;
    gap: 0.625rem;
    align-items: start;

    > h1 {
      font-size: 1.25rem;
      font-weight: 600;
      color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
      transition: color 0.3s ease;
    }

    > p {
      font-size: 1rem;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY};
      transition: color 0.3s ease;
    }
  }
`

export const Teacher = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY};

  > svg {
    font-size: 1.25rem;
  }
`
