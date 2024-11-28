import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

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

  > section {
    max-width: 1440px;
    margin: 0 auto;
    padding: 1rem 3.125rem;

    overflow-y: auto;

    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 1rem;
  }
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

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    > h1 {
      font-size: 1.5rem;
    }

    > p {
      font-size: 0.875rem;
    }

    > div {
      flex-wrap: wrap;

      > span {
        display: none;
      }
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

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    > div {
      .title {
        font-size: 1.25rem;

        > span {
          font-size: 0.75rem;
        }
      }
    }

    > p {
      font-size: 0.875rem;
    }
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

  > footer {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 1rem;
    border: none;
    padding: 0.625rem 0.75rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    > div {
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 0.625rem;

      .title {
        font-size: 1.25rem;

        > span {
          font-size: 0.75rem;
        }
      }

      > div {
        display: flex;
        align-items: center;
        gap: 1rem;
      }
    }

    > p {
      font-size: 0.875rem;
    }
  }
`
