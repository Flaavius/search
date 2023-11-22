import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 36px 36px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media screen and (max-width: 560px) {
    padding: 12px;
  }
`;

export default Wrapper;