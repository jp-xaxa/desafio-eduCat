import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-areas:
    "header"
    "content";
  grid-template-rows: max-content auto;
`

export const Content = styled.main`
  grid-area: content;
  height: 100%;

  padding: 1rem 3.125rem;

  overflow-y: auto;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`

export const Cover = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;

  > h1 {
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
  }

  > p {
    font-size: 1rem;
    color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
  }

  > div {
    display: flex;
    align-items: center;
    gap: 0.625rem;

    > span {
      font-size: 2rem;
      opacity: 0.2;
    }
  }
`

export const About = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  border: 2px solid ${({ theme }) => theme.COLORS.TEXT_SECONDARY};
  border-radius: 0.625rem;

  > div {
    width: 100%;
    padding: 0.625rem 0.75rem;

    display: flex;
    align-items: center;

    border-bottom: 2px solid ${({ theme }) => theme.COLORS.TEXT_SECONDARY};

    .title {
      font-size: 1.5rem;
      color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};

      > span {
        font-size: 0.875rem;
        color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY};
        opacity: 0.8;
      }
    }
  }

  > p {
    font-size: 1rem;
    color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
    padding: 0.625rem 0.75rem;
  }
`

export const Teacher = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  border: 2px solid ${({ theme }) => theme.COLORS.TEXT_SECONDARY};
  border-radius: 0.625rem;

  width: 100%;
  display: flex;
  flex-direction: column;

  border: 2px solid ${({ theme }) => theme.COLORS.TEXT_SECONDARY};
  border-radius: 0.625rem;

  > div {
    width: 100%;
    padding: 0.625rem 0.75rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border-bottom: 2px solid ${({ theme }) => theme.COLORS.TEXT_SECONDARY};

    .title {
      font-size: 1.5rem;
      color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};

      > span {
        font-size: 0.875rem;
        color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY};
        opacity: 0.8;
      }
    }

    &.specialization {
      display: flex;
      align-items: center;
      justify-content: start;
      gap: 1rem;
      border: none;
    }

    > div {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  }

  > p {
    font-size: 1rem;
    color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
    padding: 0.625rem 0.75rem;
  }
`
