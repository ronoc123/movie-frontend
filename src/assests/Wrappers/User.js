import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 8fr 5fr;
  margin-bottom: 2rem;
  .img-con {
    display: grid;
    place-items: center;
    font-size: 7rem;
    /* margin-right: 1rem; */
  }
  img {
    width: 7rem;
    height: 7rem;
    border-radius: 50%;
  }

  .info-con {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 1rem;
  }
  .stat-con {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .stacked-item {
    display: grid;
    place-items: center;
    border-right: 1px solid grey;
    padding: 0.7rem;
    color: grey;
  }
  .end {
    border-right: none;
  }

  .number {
    font-size: 1.5rem;
  }
  .title {
    font-size: 0.8rem;
  }
  @media screen and (max-width: 800px) {
    .follow-btn {
      font-size: 0.8rem;
      padding: 0.3rem;
    }
    .number {
      font-size: 0.8rem;
    }
    .info-con {
      font-size: 0.8rem;
    }
    .img-con {
      font-size: 2rem;
    }
  }
`;

export default Wrapper;
