import styled from 'styled-components';
import { RenderForm } from '../Form/form';
// import { tag } from '../../types/index';

type Props = {
  setTagTodo(value: string): void;
  setTitle(value: string): void;
  setTodo(value: string): void;
  handleAddTodo(): void;
};

export const AddTodo = styled.div`
  margin: 0 auto;
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

export function RenderAddTodo(props: Props): JSX.Element {
  return (
    <AddTodo>
      <RenderForm
        setTitle={props.setTitle}
        setTodo={props.setTodo}
        handleAddTodo={props.handleAddTodo}
        setTagTodo={props.setTagTodo}
      />
    </AddTodo>
  );
}
