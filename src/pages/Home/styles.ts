import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: grid;
  grid-template-areas:
    "header"
    "content";
  grid-template-rows: max-content auto;
`
