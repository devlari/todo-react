import { Row, Title, ButtonDetails, Text } from '..';
import { message } from '../../types/message';
import styled from 'styled-components';

type Props = {
  list: Array<message>;
  toggleModal: any;
};

export const BoxTodo = styled.div`
  width: 90%;
  height: 75vh;
  margin: 15px auto;
  background-color: ${(props) => props.theme.colors.background};
  border: 2px solid ${(props) => props.theme.colors.border};
  border-radius: 5px;
  list-style: none;
  overflow-y: scroll;
`;

export const ItemTodo = styled.div`
  padding: 15px;
  margin: 10px;
  background-color: ${(props) => props.theme.colors.backgrounditem};
  text-align: left;
  border-radius: 3px;
  width: 100%;
`;

export function RenderTodo(props: Props): JSX.Element {
  return (
    <BoxTodo>
      {props.list.map((item: message) => {
        return (
          <Row key={item.id}>
            <ItemTodo>
              <Title subt>{item.title}</Title>
              <Text description>
                {item.id}. {item.message}
              </Text>
              <ButtonDetails
                onClick={() => {
                  props.toggleModal(item.id);
                }}
              >
                +
              </ButtonDetails>
            </ItemTodo>
          </Row>
        );
      })}
    </BoxTodo>
  );
}
