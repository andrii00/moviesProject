import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore } from "redux";
import { HashRouter  } from 'react-router-dom';
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import { logger } from 'redux-logger';
import React from 'react';

import { reducers } from "../redux/reducers";
import { sagas } from "../redux/sagas";
import App from '../app/App';

const saga = createSagaMiddleware();
const middleware = [saga, logger];

export const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middleware))
);

saga.run(sagas);

export default () => (
    <Provider store={store}>
        <HashRouter >
            <App />
        </HashRouter >
    </Provider>
);
