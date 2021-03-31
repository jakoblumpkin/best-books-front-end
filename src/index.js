import React from 'react';
    import ReactDOM from 'react-dom';
    import { Auth0Provider } from '@auth0/auth0-react';
    import App from './App';
    ReactDOM.render(
      <Auth0Provider
        domain="dev-jessi.us.auth0.com"
        clientId="uCdrSfWrxVYvlnpXaRlcYS2QTMHFgfxi"
        redirectUri={'https://thirsty-jones-456a75.netlify.app'}
    >
      <App />
    </Auth0Provider>,
    document.getElementById('root')
 );