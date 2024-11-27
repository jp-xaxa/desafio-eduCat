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
