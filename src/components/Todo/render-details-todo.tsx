import styled from 'styled-components';
import { Text, Title, Button } from '..';
import { task } from '../../types';

type Props = {
  todo: task;
  delete(id: number): void;
  setShowModalDetails(bool: boolean): void;
};

export const DetailsTodo = styled.div`
  margin: 0 auto;
  max-height: 70%;
  background-color: ${(props) => props.theme.colors.backgrounditem};
  padding: 30px;
  border-radius: 10px;
  border: 4px solid ${(props) => props.theme.colors.primary};
  min-width: 500px;
  overflow-y: auto;
  max-width: 80%;

  animation: animationBoxModal 0.5s;

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
        {props.todo.id}. {props.todo.task}
      </Text>
      <Button
        onClick={() => {
          props.delete(props.todo.id);
          alert('Deleted successfully!');
          props.setShowModalDetails(false);
        }}
      >
        Delete
      </Button>
    </DetailsTodo>
  );
}
