import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Row } from '../../../components';

export const RadioOptions = styled.div`
  display: inline-flex;
  overflow: hidden;
  border-radius: 10px;
  border: 2px solid ${(props) => props.theme.colors.border};

  .item-work:hover {
    background-color: ${(props) => props.theme.colors.tag.Work};
  }
  .item-college:hover {
    background-color: ${(props) => props.theme.colors.tag.College};
  }
  .item-study:hover {
    background-color: ${(props) => props.theme.colors.tag.Study};
  }
  .item-personal:hover {
    background-color: ${(props) => props.theme.colors.tag.Personal};
  }

  .selected {
    background-color: ${(props) => props.theme.colors.tag};
  }
`;

export const Radio = styled.input`
  display: none;
`;

export const Options = styled.label`
  padding: 8px 14px;
  cursor: pointer;
`;

export function SwitchGroup() {
  const [tagAdd, setTagAdd] = React.useState('');

  // useState(() => {
  //   console.log(tagStudy, tagPersonal, tagCollege, tagWork);
  // });

  function handleRadio(value: string) {
    setTagAdd(value);
  }

  useEffect(() => {
    console.log(tagAdd);
    if (tagAdd === 'Study') {
    }
  }, [tagAdd]);

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
        <Options className='radio-label item-work' htmlFor='Work'>
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
