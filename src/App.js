import React, { useState } from "react";
import { Globals } from "./abstracts/Globals";
import { sectionSpacingLg } from "./abstracts/Mixins";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./abstracts/Themes";
import Header from "./components/Header";
import Search from "./components/Search";
import User from "./components/User";

const Main = styled.main`
  ${sectionSpacingLg}
  max-width: 800px;
  margin: 0 auto;
`;

const App = () => {
  const [theme, setTheme] = useState("dark");
  const [data, setData] = useState({});
  const [isError, setIsError] = useState(false);
  const [userInput, setUserInput] = useState("");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const fetchData = async () => {
    try {
      setIsError(false);
      const URL = `https://api.github.com/users/${userInput}`;
      const res = await fetch(URL);
      const data = await res.json();
      setData(data);
      console.log(data);
      setUserInput("");
    } catch (error) {
      setIsError(true);
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data) return;
    fetchData();
  };

  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <Globals />
        <Main>
          <Header theme={theme} themeToggler={themeToggler} />
          <Search
            handleSubmit={handleSubmit}
            userInput={userInput}
            setUserInput={setUserInput}
          />
          <User data={data} />
        </Main>
      </ThemeProvider>
    </>
  );
};

export default App;
