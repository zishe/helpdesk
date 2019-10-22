import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ApolloProvider } from "react-apollo";
import registerServiceWorker from './registerServiceWorker';
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from './theme';
import App from './App';
import client from './graphql/client';
import './index.css';
// import i18n (needs to be bundled ;))
import './i18n';



ReactDOM.render(
  <ApolloProvider client={client}>
    <MuiThemeProvider theme={theme.darkTheme}>
        <App />
    </MuiThemeProvider>
  </ApolloProvider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
