// Core
import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';

// Instruments
import reducer from '../reducers';
import persistedState from '../appState';
import { log } from 'helpers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = createLogger({
    duration:  true,
    collapsed: true,
    diff:      true,
    colors:    {
        title:     () => '#139BFE',
        prevState: () => '#1C5FAF',
        action:    () => '#149945',
        nextState: () => '#A47104',
        error:     () => '#ff0005',
    },
});

const logger2 = ({ getState }) => (next) => (action) => {
    log('• old state •', 'fffdde', getState());

    next(action);

    log('• new state •', 'fffdde', getState());
};

export default createStore(reducer, persistedState, composeEnhancers(applyMiddleware(logger)));
