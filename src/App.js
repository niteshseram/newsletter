import { ThemeProvider } from 'styled-components';
import theme from './theme';
import GlobalStyles from './Global.styled';
import Main from './components/Main';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Main />
    </ThemeProvider>
  );
}

export default App;
