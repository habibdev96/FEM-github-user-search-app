import React, { useState } from 'react';
import { Globals } from './abstracts/Globals';
import { sectionSpacingLg, sectionSpacingSm } from './abstracts/Mixins';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './abstracts/Themes';
import Header from './components/Header';
import Search from './components/Search';
import User from './components/User';
import Tag from './components/Tag';
import Responsive from './abstracts/Responsive';

const Main = styled.main`
  ${sectionSpacingLg}
  max-width: 800px;
  margin: 0 auto;

  ${Responsive.md`
    ${sectionSpacingSm}
  `}
`;

const App = () => {
  const [theme, setTheme] = useState('dark');
  const [data, setData] = useState({});
  const [isActive, setIsActive] = useState(true);
  const [userInput, setUserInput] = useState('');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  const fetchData = async () => {
    try {
      const URL = `https://api.github.com/users/${userInput}`;
      const res = await fetch(URL);
      const data = await res.json();
      setData(data);
      setUserInput('');
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsActive(true);
    if (!data) return;
    fetchData();
    setIsActive(false);
  };

  return (
    <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <Main>
          <Globals />
          <Header theme={theme} themeToggler={themeToggler} />
          <Search
            handleSubmit={handleSubmit}
            userInput={userInput}
            setUserInput={setUserInput}
          />
          {!isActive && <User data={data} />}
        </Main>
        <Tag />
      </ThemeProvider>
    </>
  );
};

export default App;
