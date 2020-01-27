import styled from 'styled-components';

const Wrapper = styled.div`
  width: ${props => props.theme.width.full};
  padding-left: ${props => props.theme.spacing.s6};
  padding-right: ${props => props.theme.spacing.s6};
  padding-top: ${props => props.theme.spacing.s4};
  padding-bottom: ${props => props.theme.spacing.s4};
`;

export default Wrapper;
