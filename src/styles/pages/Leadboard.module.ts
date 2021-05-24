import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: grid;

  grid-template-rows: 112px auto;
  grid-template-columns: 112px auto;
  grid-template-areas: "SB BC";
`;

export const Container = styled.div`
  grid-area: BC;
  height: 100vh;
  max-width: 992px;
  margin: 0 auto;
  padding: 2.5rem 2rem;

  display: flex;
  flex-direction: column;

  section {
    flex: 1;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6.25rem;
    align-content: center;
  }
`;