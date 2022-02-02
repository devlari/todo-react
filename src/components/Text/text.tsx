import styled from "styled-components";

type Props = {
    t?: boolean;
}

export const Text = styled.p<Props>`
    font-size: ${(props) => props.t ? "30pt" : "15pt"};
    color: ${(props) => props.t ? "palevioletred" : "#343434"};
    margin: ${(props) => props.t ? "20px" : "0px"};
`;