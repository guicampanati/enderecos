import styled from 'styled-components';

const Wrapper = styled.div`
  overflow: hidden;
  background-color: ${props => props.theme.color.white};
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.boxShadow.lg};
`;

export default Wrapper;
