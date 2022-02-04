import React from 'react';
import {
  RenderTodo,
  Container,
  Box,
  Title,
  RenderModalTodo,
  BoxModal,
  Row,
  Button,
} from '../components';
import { RenderAddTodo } from '../components/Todo/render-add-todo';
import { task, tag } from '../types';

export const Home = () => {
  const [todo, setTodo] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [tagTodo, setTagTodo] = React.useState<tag>('Work');
  const [todoDetail, setTodoDetail] = React.useState<task>({
    id: 0,
    title: '',
    task: '',
    tag: 'Work',
  });

  const [todoList, setTodoList] = React.useState<task[]>([]);
  const [showModalDetails, setShowModalDetails] = React.useState(false);
  const [showModalAdd, setShowModalAdd] = React.useState(false);

  function toggleModal(id: number) {
    const result = todoList.filter((todo) => todo.id === id);
    console.log(result);

    setTodoDetail({
      id: result[0].id,
      title: result[0].title,
      task: result[0].task,
      tag: 'Work',
    });

    setShowModalDetails(!showModalDetails);
  }

  function toggleModalAdd() {
    setShowModalAdd(!showModalAdd);
  }

  // useEffect(() => {
  //   console.log(todoList);
  // }, [todoList]);

  function handleAddTodo() {
    if (todo.trim() === '' || title.trim() === '') {
      alert('Please insert something in both values...');
    } else {
      const newtask: task = {
        id: todoList.length + 1,
        title,
        task: todo,
        tag: 'Work',
      };
      alert('Task added successfully!');
      setTodoList([...todoList, newtask]);
      setShowModalAdd(false);
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
          <Title t>To-do List</Title>
          <Row>
            <Button
              onClick={() => {
                toggleModalAdd();
              }}
            >
              Add new task
            </Button>
          </Row>
          <RenderTodo toggleModal={toggleModal} list={todoList} />
        </Box>
        {showModalDetails && (
          <BoxModal
            className='backgroundModal'
            onClick={(e) => {
              let background = document.querySelector('.backgroundModal');
              if (e.target === background) {
                setShowModalDetails(false);
              }
            }}
          >
            <RenderModalTodo
              setShowModalDetails={setShowModalDetails}
              delete={handleDeleteTodo}
              todo={todoDetail}
            />
          </BoxModal>
        )}
        {showModalAdd && (
          <BoxModal
            className='backgroundModal'
            onClick={(e) => {
              let background = document.querySelector('.backgroundModal');
              if (e.target === background) {
                setShowModalDetails(false);
              }
            }}
          >
            <RenderAddTodo
              setTitle={setTitle}
              setTodo={setTodo}
              handleAddTodo={handleAddTodo}
            />
          </BoxModal>
        )}
      </Container>
    </>
  );
};
