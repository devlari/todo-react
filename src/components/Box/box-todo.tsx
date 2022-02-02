import styled from 'styled-components'
import { Row, ItemTodo, ButtonDelete } from '../../components'

type Props = {
    i: Array<string>;
}

export function RenderTodo(props: Props): JSX.Element {
    return (
        <BoxTodo>
            {props.i.map((item) => {
                return (
                    <Row>
                    <ItemTodo>{item}
                    <ButtonDelete onClick={() => {
                        alert('Failed to delete...')
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