import { Platform } from 'react-native';    
import { 
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import devTools from 'remote-redux-devtools';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension'

import RootReducer from './Reducers';

const middleware = composeWithDevTools(applyMiddleware(thunk, promise, logger));

const Store = createStore(
    RootReducer,
    compose(
        middleware,       
        devTools({
            name: Platform.android,
            hostname: 'localhost',
            port: 19000
        }),
    )
);

export default Store;