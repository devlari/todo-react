// import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Row } from '../../../components';

type Props = {
  setTagTodo(value: string): void;
};

export const RadioOptions = styled.div`
  display: inline-flex;
  overflow: hidden;
  border-radius: 10px;
  border: 2px solid ${(props) => props.theme.colors.border};

  .item-work:hover,
  #Work:checked + label {
    background-color: ${(props) => props.theme.colors.tag.Work};
  }
  .item-college:hover,
  #College:checked + label {
    background-color: ${(props) => props.theme.colors.tag.College};
  }
  .item-study:hover,
  #Study:checked + label {
    background-color: ${(props) => props.theme.colors.tag.Study};
  }
  .item-personal:hover,
  #Personal:checked + label {
    background-color: ${(props) => props.theme.colors.tag.Personal};
  }
`;

export const Radio = styled.input`
  display: none;
`;

export const Options = styled.label`
  padding: 8px 14px;
  cursor: pointer;
`;

export function SwitchGroup(props: Props) {
  // useState(() => {
  //   console.log(tagStudy, tagPersonal, tagCollege, tagWork);
  // });

  function handleRadio(value: string) {
    props.setTagTodo(value);
  }

  // useEffect(() => {
  //   console.log(tagAdd);
  //   if (tagAdd === 'Study') {
  //   }
  // }, [tagAdd]);

  return (
    <Row>
      <RadioOptions>
        <Radio
          type='radio'
          name='exampleRadios'
          value='Work'
          id='Work'
          onChange={(e) => {
            handleRadio(e.target.value);
          }}
        />
        <Options id='work' className='radio-label item-work' htmlFor='Work'>
          Work
        </Options>
        <Radio
          onChange={(e) => {
            handleRadio(e.target.value);
          }}
          type='radio'
          name='exampleRadios'
          value='College'
          id='College'
        />
        <Options className='radio-label item-college' htmlFor='College'>
          College
        </Options>
        <Radio
          type='radio'
          name='exampleRadios'
          value='Study'
          id='Study'
          onChange={(e) => {
            handleRadio(e.target.value);
          }}
        />
        <Options className='radio-label item-study' htmlFor='Study'>
          Study
        </Options>
        <Radio
          type='radio'
          name='exampleRadios'
          id='Personal'
          value='Personal'
          onChange={(e) => {
            handleRadio(e.target.value);
          }}
        />
        <Options className='radio-label item-personal' htmlFor='Personal'>
          Personal
        </Options>
      </RadioOptions>
    </Row>
  );
}
