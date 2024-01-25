import styled from "styled-components";

const Wrapper = styled.div`
  background: var(--clr-grey);
  border-radius: 0.3rem;
  min-height: 50vh;
  max-height: 40rem;
  overflow-x: hidden;
  overflow-y: auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;
  padding: 0.5rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
    /* gap: 1.2rem; */
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.2rem;
  }
`;

export default Wrapper;
