import React from 'react';
import { render } from '../../test-utils';
import { fireEvent } from '@testing-library/react';
import Modal from '../Modal';

describe('<Modal />', () => {
  let component;
  let modal = document.createElement('div');
  modal.setAttribute('id', 'modal');

  const Actions = () => {
    return <div>Action Test</div>;
  };

  const props = {
    title: 'Title Test',
    content: 'Content Test',
    actions: <Actions />,
    onDismiss: jest.fn()
  };

  beforeEach(() => {
    component = render(
      <Modal
        title={props.title}
        content={props.content}
        actions={props.actions}
        onDismiss={props.onDismiss}
      />,
      {
        container: document.body.appendChild(modal)
      }
    );
  });

  test('should render modal title', () => {
    const title = component.container.querySelector('#title');

    expect(title).toHaveTextContent(props.title);
  });

  test('should render modal content', () => {
    const content = component.container.querySelector('#content');

    expect(content).toHaveTextContent(props.content);
  });

  test('should render modal actions component', () => {
    const actions = component.container.querySelector('#actions');

    expect(actions).toHaveTextContent('Action Test');
  });

  test('should call onDismiss', () => {
    const dismiss = component.container.querySelector('#dismiss');

    fireEvent.click(dismiss);

    expect(props.onDismiss).toHaveBeenCalledTimes(1);
  });
});
