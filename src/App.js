import React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DonatePage from './pages/DonatePage';
import CongratsPage from './pages/CongratsPage';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        {/* <Header /> */}
        <Switch>
          <Box textAlign="center" fontSize="xl">
            <ColorModeSwitcher justifySelf="flex-end" />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/donate" component={DonatePage} />
            <Route exact path="/congrats" component={CongratsPage} />
          </Box>
          {/* <Route exact path="/login" component={LogInPage} />
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/requests" component={RequestPage} />
          <Route exact path="/requests/:id" component={DetailPage} />
          <Route exact path="/donate/:id" component={BankTransfer} /> */}
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
