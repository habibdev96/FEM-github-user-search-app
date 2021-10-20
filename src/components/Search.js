import React from 'react';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import { textStyles } from '../abstracts/Mixins';
import Responsive from '../abstracts/Responsive';

const Form = styled.form`
  margin: 2rem 0;
  position: relative;

  .icon {
    color: ${({ theme }) => theme.primary};
    font-size: 2.5rem;
    position: absolute;
    top: 1.8rem;
    left: 1rem;

    ${Responsive.xs`
      top: 1.2rem;
    `}
  }

  .search {
    ${textStyles}
    background-color: ${({ theme }) => theme.appBg};
    color: ${({ theme }) => theme.mainText};
    outline: 0;
    border: 0;
    width: 100%;
    font-size: 1.8rem;
    padding: 1.5rem 5rem;
    border-radius: var(--mainRadius);
    box-shadow: var(--mainShadow);
    transition: var(--mainTransition);

    ${Responsive.xs`
      font-size: 1.3rem;   
    `}
  }

  .submit {
    ${textStyles}
    background-color: ${({ theme }) => theme.primary};
    color: hsl(0, 0%, 100%);
    outline: 0;
    border: 0;
    font-size: 1.6rem;
    padding: 1rem 2rem;
    position: absolute;
    top: 0.8rem;
    right: 1rem;
    border-radius: var(--mainRadius);
    transition: var(--mainTransition);

    &:hover,
    &:focus {
      opacity: 0.8;
    }

    ${Responsive.sm`
      position: static; 
      margin: 2rem 0;
      width: 100%;
    `}
  }
`;

const Search = ({ handleSubmit, userInput, setUserInput }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <FiSearch className='icon' />
      <input
        type='text'
        placeholder='Search Github username...'
        className='search'
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button type='submit' className='submit'>
        Search
      </button>
    </Form>
  );
};

export default Search;
