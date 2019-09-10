import React from 'react';
import { Provider } from 'mobx-react';
import Routers from './Routers';
import { render } from 'react-dom';
import user from './Store';

render(
    <Provider {...{user}}>
        <Routers />
    </Provider>,
    document.getElementById('App')
);

