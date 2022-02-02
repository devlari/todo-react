import styled from 'styled-components'
import { Row, ItemTodo, ButtonDelete } from '../../components'

type Props = {
    list: Array<message>
    delete: any
}

type message = {
    id: number,
    message: string
}

export function RenderTodo(props: Props): JSX.Element {
    return (
        <BoxTodo>
            {props.list.map((item: message) => {
                return (
                <Row key={item.id}>
                    <ItemTodo>{item.id}. {item.message}
                    <ButtonDelete onClick={() => {
                        props.delete(item.id)
                    }}>X</ButtonDelete>
                    </ItemTodo>
                </Row>
            );
        })}
        </BoxTodo>
    )
}

export const BoxTodo = styled.div`
    width:90%;
    height: 75vh;
    margin: 15px auto;
    background-color: whitesmoke;
    border: 1px solid white;
    list-style: none;
    overflow-y: scroll;
`