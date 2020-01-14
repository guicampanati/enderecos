import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Modal = ({ title, content, actions, onDismiss }) => {
  return ReactDOM.createPortal(
    <Container onClick={onDismiss}>
      <Wrapper onClick={e => e.stopPropagation()}>
        <Title>{title}</Title>
        <Content>{content}</Content>
        <Actions>{actions}</Actions>
      </Wrapper>
    </Container>,
    document.getElementById('modal')
  );
};

const Container = styled.div`
  position: fixed;
  display: flex;
  width: ${props => props.theme.width.full};
  height: ${props => props.theme.height.full};
  background-color: ${props => props.theme.color.black};
  background-color: rgba(0, 0, 0, 0.5);
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin: auto;
  padding: ${props => props.theme.spacing.s8};
  background-color: ${props => props.theme.color.white};
  width: ${props => props.theme.width.full};
  max-width: ${props => props.theme.maxWidth.md};
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.boxShadow.lg};
`;

const Title = styled.div`
  color: ${props => props.theme.color.gray.darker};
  font-weight: ${props => props.theme.fontWeight.bold};
  font-size: ${props => props.theme.fontSize.xl};
  margin-bottom: ${props => props.theme.spacing.s2};
`;

const Content = styled.p`
  color: ${props => props.theme.color.gray.medium};
  font-size: ${props => props.theme.fontSize.base};
`;

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default Modal;
