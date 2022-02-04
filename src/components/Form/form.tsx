import styled from 'styled-components';
import { Input, Text, ButtonSend, TextArea, Column } from '../../components';

// type Props = {
//   setTitle(value: string): void;
//   setTodo(value: string): void;
//   handleAddTodo(): void;
// };

type Props = {
  setTitle: any;
  setTodo: any;
  handleAddTodo: any;
};

export const Form = styled.div`
  margin: 0 auto;
  width: 90%;
`;

export function RenderForm(props: Props) {
  return (
    <Form>
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
      <ButtonSend
        onClick={() => {
          props.handleAddTodo();
        }}
      >
        OK
      </ButtonSend>
    </Form>
  );
}
