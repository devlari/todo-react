import React, { useEffect } from "react";
import { Input, Text, RenderTodo, ButtonSend, Container, Box, Row, BoxTodo } from "../components"

export const Home = () => {
    const [todo, setTodo] = React.useState('');
    const [todoList, setTodoList] = React.useState<string[]>([]); 

    useEffect(() => {

    },[])


    function handleAddTodo(todo: string){
        if (todo.trim() === ''){
            alert('Please insert something...')
        }
        else{
            setTodoList([...todoList, todo.trim()])
            setTodo('')
        }
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
                <RenderTodo i={todoList}/>
            </Box>
        </Container>
    )
}