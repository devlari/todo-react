import styled from 'styled-components';

export const TextArea = styled.textarea`
  background-color: transparent;
  padding: 10px;
  border: 2px solid ${(props) => props.theme.colors.border};
  border-radius: 10px;
  resize: none;
  height: 100px;

  &::placeholder {
    color: rgba(0, 0, 0, 0.2);
  }
`;
