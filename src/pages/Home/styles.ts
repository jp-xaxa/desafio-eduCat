import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-areas:
    "header header"
    "aside content ";
  grid-template-rows: max-content auto;
  grid-template-columns: 20% 80%;
`

export const Content = styled.main`
  grid-area: content;
  height: 100%;

  padding: 1rem 2.5rem;

  overflow-y: auto;

  > div {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 1rem;

    > h1 {
      font-size: 2rem;
      color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
    }
  }

  > section {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1.25rem;
  }
`

export const Aside = styled.div`
  grid-area: aside;

  border-right: 2px solid ${({ theme }) => theme.COLORS.GRAY_200};
  margin: 1rem 0;
  padding: 0 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  overflow-y: auto;

  > h2 {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
    text-align: center;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
  }
`
