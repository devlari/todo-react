import { Row, Title, Button, Text } from '..';
import { task } from '../../types/task';
import styled from 'styled-components';

type Props = {
  list: Array<task>;
  toggleModal: any;
};

export const BoxTodo = styled.div`
  width: 90%;
  height: 60vh;
  margin: 15px auto;
  background-color: ${(props) => props.theme.colors.background};
  border: 2px solid ${(props) => props.theme.colors.border};
  border-radius: 5px;
  list-style: none;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0px; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
`;

export const ItemTodo = styled.div`
  padding: 15px;
  margin: 10px;
  background-color: ${(props) => props.theme.colors.backgrounditem};
  text-align: left;
  border-radius: 3px;
  width: 100%;
  border: 2px solid transparent;

  &:hover {
    cursor: pointer;
    border: 2px solid ${(props) => props.theme.colors.border};
  }
`;

export function RenderTodo(props: Props): JSX.Element {
  return (
    <BoxTodo>
      {props.list.map((item: task) => {
        return (
          <Row key={item.id}>
            <ItemTodo
              onClick={() => {
                props.toggleModal(item.id);
              }}
            >
              <Title subt>{item.title}</Title>
              <Text description>
                {item.id}. {item.task}
              </Text>
            </ItemTodo>
          </Row>
        );
      })}
    </BoxTodo>
  );
}
