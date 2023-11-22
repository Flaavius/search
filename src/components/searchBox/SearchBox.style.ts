import styled, { css } from 'styled-components';

const StyledSearchBox = styled.div<{ focused: boolean | undefined }>`
  width: min-content;
  .input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    gap: 12px;
    border: 1px solid darkgray;
    border-radius: 30px;
    padding: 0px 16px;
    transition: all .1s ease-in-out;
    width: 400px;
  }
  .results {
    padding: 16px 16px 32px 16px;
    border: 1px solid darkgray;
    border-top: none;
    border-bottom-right-radius: 30px;
    border-bottom-left-radius: 30px;
    display: none;
    animation: appear .2s ease-in-out forwards;
    transform-origin: 50% 0%;
    position: absolute;
    background: white;
    width: 400px;
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 4px;
      li {
        display: flex;
        justify-content: space-between;
        cursor: pointer;
        &.visited {
          color: purple;
        }
        button {
          background: none;
          border: none;
          cursor: pointer;
          display: none;
          color: blue;
        }
        &.visited:hover {
          button {
            display: block;
          }
        }
      }
    }
  }
  input {
    flex: 1;
    padding: 0;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 400;
    border: none;
    outline: none;
    padding: 16px 0px;
  }
  .icon, .close-icon {
    height: 20px;
    width: 20px;
    cursor: pointer;
  }

  ${({ focused }) => focused && css`
    .input-wrapper {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
    .results {
      display: block;
    }
  `}

  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;


export default StyledSearchBox;