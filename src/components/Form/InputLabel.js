import styled from 'styled-components';

const InputLabel = styled.label`
  display: block;
  color: ${props => props.theme.color.gray.dark};
  font-size: ${props => props.theme.fontSize.sm};
  font-weight: ${props => props.theme.fontWeight.bold};
  margin-bottom: ${props => props.theme.spacing.s2};
`;

export default InputLabel;
