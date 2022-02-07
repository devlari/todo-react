import React, { useEffect } from 'react';
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
import { tag } from '../styles/themes/tag';
import { task } from '../types';
import { createClient } from '@supabase/supabase-js';

export const Home = () => {
  const [todo, setTodo] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [tagTodo, setTagTodo] = React.useState('');
  const [todoDetail, setTodoDetail] = React.useState<task>({
    id: 0,
    title: '',
    task: '',
    tag: '',
  });

  const [todoList, setTodoList] = React.useState<task[]>([]);
  const [showModalDetails, setShowModalDetails] = React.useState(false);
  const [showModalAdd, setShowModalAdd] = React.useState(false);

  // useEffect(() => {
  //   const url = process.env.REACT_APP_SUPABASE_URL;
  //   const key = process.env.REACT_APP_SUPABASE_ANON_KEY;
  //   let SupabaseClient = '';
  //   SupabaseClient = createClient(url, key);
  // }, []);

  // React.useEffect(() => {
  //   const todoList = SupabaseClient.from('mensagens')
  //     .select('*')
  //     .order('id', { ascending: false })
  //     .then(({ data }) => {
  //       setTodoList(data);
  //     });
  // }, [lista]);

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
    if (todo.trim() === '' || title.trim() === '' || tagTodo.trim() === '') {
      alert('Please insert something in the values...');
    } else {
      const newtask: task = {
        id: todoList.length + 1,
        title,
        task: todo,
        tag: tagTodo,
      };
      alert('Task added successfully!');
      setTodoList([...todoList, newtask]);

      setTodo('');
      setTitle('');
      setTagTodo('');

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
              setTagTodo={setTagTodo}
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
