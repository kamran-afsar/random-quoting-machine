import React from 'react';
import { Navbar } from './NavBar/Navbar';
import { Provider, teamsTheme, teamsDarkTheme } from '@fluentui/react-northstar';
import { RandomQuotes } from './Quotes/Quote';
import "./App.css";
import 'font-awesome/css/font-awesome.min.css';
function App() {
  const [darkTheme, setDarkTheme] = React.useState(false);
  const handleTheme = (themeInput:boolean) => {
    setDarkTheme(themeInput)
  }
  return (
<Provider theme={darkTheme ? teamsDarkTheme: teamsTheme}>
      <Navbar goDark={(dark) => handleTheme(dark)} />
      <RandomQuotes />
    </Provider>
  );
}

export default App;
