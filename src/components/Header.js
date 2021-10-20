import React from 'react';
import styled from 'styled-components';
import { headingStyles, textStyles } from '../abstracts/Mixins';
import { FiSun, FiMoon } from 'react-icons/fi';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--gap);

  .logo {
    ${headingStyles}
    color: ${({ theme }) => theme.mainText};
    font-size: 2.6rem;
  }

  .toggler {
    ${textStyles}
    color: ${({ theme }) => theme.mainText};
    font-size: 1.5rem;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 1rem;
    outline: 0;
    border: 0;
    background-color: transparent;
  }

  .icon {
    font-size: 1.5rem;
  }

  .toggler,
  .icon {
    transition: var(--mainTransition);

    &:hover,
    &:focus {
      color: ${({ theme }) => theme.secondaryText};
    }
  }
`;

const Header = ({ theme, themeToggler }) => {
  return (
    <header>
      <Container>
        <h1 className='logo'>devfinder</h1>
        <button className='toggler' onClick={themeToggler}>
          {theme === 'light' ? 'dark' : 'light'}
          {theme === 'light' ? (
            <FiMoon className='icon' />
          ) : (
            <FiSun className='icon' />
          )}
        </button>
      </Container>
    </header>
  );
};

export default Header;
