import styled from 'styled-components';

const InputField = styled.div`
  margin-bottom: ${props => props.theme.spacing.s4};

  input {
    appearance: none;
    width: ${props => props.theme.width.full};
    box-shadow: ${props => props.theme.boxShadow.default};
    padding: ${props => props.theme.spacing.s2};
    color: ${props => props.theme.color.gray.dark};
    border-width: 1px;
    border-radius: ${props => props.theme.borderRadius.default};

    border-color: ${props =>
      props.error && props.touched
        ? props.theme.color.red.medium
        : props.theme.color.gray.light};

    &:focus {
      outline: 0;
      box-shadow: ${props => props.theme.boxShadow.outline};
    }
  }

  p {
    color: ${props => props.theme.color.red.medium};
    font-size: ${props => props.theme.fontSize.xs};
    font-style: italic;
  }
`;

export default InputField;
