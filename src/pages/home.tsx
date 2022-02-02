import React, { useEffect, useState } from "react";
import { Input, Text, RenderTodo, ButtonSend, Container, Box, Row, BoxTodo } from "../components"

export const Home = () => {
    const [todo, setTodo] = React.useState('');
    // const [todoList, setTodoList] = React.useState<string[]>([]); 
    const [todoList, setTodoList] = React.useState<message[]>([]);

    useEffect(() => {
        console.log(todoList)
    },[todoList])

    type message = {
        id: number,
        message: string
    }

    function handleAddTodo(todo: string){
        if (todo.trim() === ''){
            alert('Please insert something...')
        }
        else{
            const newMessage: message = {
                id: todoList.length + 1,
                message: todo
            }

            setTodoList([...todoList, newMessage])
        }
    }

    function handleDeleteTodo(id: number) : void{
        const index = id-1
        //array funciona mas não atualiza 

        const test = todoList
        todoList.splice(index,1)
        setTodoList(test)

        //atualiza mas fica bugado
        // setTodoList(todoList.splice(index,1))
    }

    return (
        <Container>
            <Box>
                <Text t>Todo List</Text>
                <Row>
                    <Input 
                    onChange={((e) => {
                        const value = e.target.value;
                        setTodo(value)
                    })} 
                    placeholder="Type here..."
                    onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          handleAddTodo(todo);
                        }
                      }}/>
                    <ButtonSend onClick={((e) => {
                        handleAddTodo(todo)
                    })}>OK</ButtonSend>
                </Row>
                <RenderTodo list={todoList} delete={handleDeleteTodo}/>
            </Box>
        </Container>
    )
}