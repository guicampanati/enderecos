import styled from 'styled-components';

const Button = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    color: ${props => props.theme.color.white};
    font-weight: ${props => props.theme.fontWeight.bold};
    padding-top: ${props => props.theme.spacing.s2};
    padding-bottom: ${props => props.theme.spacing.s2};
    padding-left: ${props => props.theme.spacing.s4};
    padding-right: ${props => props.theme.spacing.s4};
    border-radius: ${props => props.theme.borderRadius.default};
    border-width: 1px;
    text-decoration: none;

    border-color: ${props => props.theme.color.blue.dark};
    background-color: ${props => props.theme.color.blue.light};

    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
    opacity: ${props => (props.disabled ? 0.5 : 1)};

    &:hover {
      border-color: ${props =>
        !props.disabled && props.theme.color.transparent};
      background-color: ${props =>
        !props.disabled && props.theme.color.blue.dark};
    }
  }
`;

export default Button;
