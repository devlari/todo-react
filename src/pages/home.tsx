import React from 'react';
import {
  RenderTodo,
  Container,
  Box,
  Title,
  RenderModalTodo,
  BoxModal,
  RenderForm,
} from '../components';
import { message } from '../types/message';

export const Home = () => {
  const [todo, setTodo] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [todoList, setTodoList] = React.useState<message[]>([]);
  const [showModal, setShowModal] = React.useState(false);
  const [todoDetail, setTodoDetail] = React.useState<message>({
    id: 0,
    title: '',
    message: '',
  });

  function toggleModal(id: number) {
    const result = todoList.filter((todo) => todo.id === id);
    console.log(result);

    setTodoDetail({
      id: result[0].id,
      title: result[0].title,
      message: result[0].message,
    });

    setShowModal(!showModal);
  }

  // useEffect(() => {
  //   console.log(todoList);
  // }, [todoList]);

  function handleAddTodo() {
    if (todo.trim() === '' || title.trim() === '') {
      alert('Please insert something in both values...');
    } else {
      const newMessage: message = {
        id: todoList.length + 1,
        title,
        message: todo,
      };

      setTodoList([...todoList, newMessage]);
    }
  }

  function handleDeleteTodo(id: number): void {
    const index = id - 1;
    //array funciona mas não atualiza
    const test = todoList;
    todoList.splice(index, 1);
    setTodoList(test);

    //atualiza mas fica bugado
    // setTodoList(todoList.splice(index,1))
  }

  return (
    <>
      <Container>
        <Box>
          <Title t>Todo List</Title>
          <RenderForm
            setTitle={setTitle}
            setTodo={setTodo}
            handleAddTodo={handleAddTodo}
          />
          <RenderTodo toggleModal={toggleModal} list={todoList} />
        </Box>
        {showModal && (
          <BoxModal
            className='backgroundModal'
            onClick={(e) => {
              let background = document.querySelector('.backgroundModal');
              if (e.target === background) {
                setShowModal(false);
              }
            }}
          >
            <RenderModalTodo
              setShowModal={setShowModal}
              delete={handleDeleteTodo}
              todo={todoDetail}
            />
          </BoxModal>
        )}
      </Container>
    </>
  );
};
