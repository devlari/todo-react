import styled from 'styled-components';
// import { tag } from '../../types/index';

import {
  Input,
  Text,
  Button,
  TextArea,
  Column,
  Title,
  SwitchGroup,
} from '../../components';

type Props = {
  setTitle(value: string): void;
  setTodo(value: string): void;
  setTagTodo(value: string): void;
  handleAddTodo(): void;
};

export const Form = styled.div`
  margin: 0 auto;
  width: 90%;
`;

export function RenderForm(props: Props) {
  return (
    <Form>
      <Title t>Adding new task</Title>
      <Column>
        <SwitchGroup setTagTodo={props.setTagTodo} />
      </Column>
      <Column>
        <Text>Title</Text>
        <Input
          type='text'
          placeholder='Type the title here'
          onChange={(e) => {
            const value = e.target.value;
            props.setTitle(value);
          }}
        />
      </Column>
      <Column>
        <Text>Description</Text>
        <TextArea
          onChange={(e) => {
            const value = e.target.value;
            props.setTodo(value);
          }}
          placeholder='Type more details here'
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              props.handleAddTodo();
            }
          }}
        />
      </Column>
      <Button
        onClick={() => {
          props.handleAddTodo();
        }}
      >
        OK
      </Button>
    </Form>
  );
}
