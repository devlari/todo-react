import styled from 'styled-components';
import { Text, Title, ButtonDelete } from '..';
import { message } from '../../types';

type Props = {
  todo: message;
  delete(id: number): void;
  setShowModal(bool: boolean): void;
};

export const DetailsTodo = styled.div`
  margin: 0 auto;
  height: 50%;
  background-color: ${(props) => props.theme.colors.backgrounditem};
  padding: 30px;
  border-radius: 10px;
  border: 4px solid ${(props) => props.theme.colors.primary};
  min-width: 500px;
  overflow-y: auto;
  max-width: 80%;

  animation: animationBoxModal 1s;

  @keyframes animationBoxModal {
    from {
      opacity: 0;
      transform: translate3d(0, -60px, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`;

export function RenderModalTodo(props: Props): JSX.Element {
  return (
    <DetailsTodo>
      <Title t>{props.todo.title}</Title>
      <Text description>
        {props.todo.id}. {props.todo.message}
      </Text>
      <ButtonDelete
        onClick={() => {
          props.delete(props.todo.id);
          alert('Deleted successfully!');
          props.setShowModal(false);
        }}
      >
        Delete
      </ButtonDelete>
    </DetailsTodo>
  );
}
