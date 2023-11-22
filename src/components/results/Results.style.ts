import styled from 'styled-components';

const StyledResults = styled.div`
  width: 100%;
  margin-top: 56px;
  small {
    color: #a3a3a3;
  }

  ul {
    margin-top: 24px;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .result-row {
    border-bottom: 1px solid #a3a3a3;
    a {
      display: inline-block;
      text-decoration: none;
      h3 {
        color: rgb(30,30,30);
      }
      p {
        font-size: 20px;
      }
      &:hover {
        p {
          text-decoration: underline;
        }
      }
    }

    .description {
      margin: 12px 0px;
      font-size: 18px;
    }
  }
`;

export default StyledResults;