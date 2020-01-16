import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  position: relative;
  pointer-events: none;

  &:after {
    content: '';
    position: absolute;
    display: block;
    top: calc(50% - (1em / 2));
    left: calc(50% - (1em / 2));
    width: 1em;
    height: 1em;
    border: 2px solid;
    border-radius: 9999px;
    border-right-color: transparent;
    border-top-color: transparent;
    animation: ${rotate} 500ms infinite linear;
  }
`;

export default Spinner;
