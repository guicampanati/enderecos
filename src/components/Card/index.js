import styled from 'styled-components';
import Container from './Container';
import Wrapper from './Wrapper';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${props => props.theme.spacing.s6};

  h3 {
    font-weight: ${props => props.theme.fontWeight.semibold};
    margin: 0;
  }

  h4 {
    margin-top: ${props => props.theme.spacing.s2};
    margin-bottom: ${props => props.theme.spacing.s0};
    font-weight: ${props => props.theme.fontWeight.semibold};
    font-size: ${props => props.theme.fontSize.lg};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  p {
    margin-top: ${props => props.theme.spacing.s2};
    margin-bottom: ${props => props.theme.spacing.s0};
    display: inline-flex;
    align-items: center;

    span {
      color: ${props => props.theme.color.gray.medium};
      font-size: ${props => props.theme.fontSize.sm};
    }
  }
`;

Card.Container = Container;
Card.Wrapper = Wrapper;

export default Card;
