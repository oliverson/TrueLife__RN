import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import rootReducer from './reducers';
import rootSaga from './sagas';

const persistConfig = {
    key: 'root',

    storage: AsyncStorage,
    blacklist: [
        'common',
        'auth',
        'alert',
        'comprehensiveTraining',
        '_class',
        'ticket',
        'general'
    ],
};

const composeEnhancers =
    process.env.NODE_ENV === 'development'
        ? composeWithDevTools({ realtime: true })
        : compose;

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
    const middleware = [];
    middleware.push(sagaMiddleware);
    const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

    const store = createStore(persistedReducer, enhancer);
    let persistor = persistStore(store);

    sagaMiddleware.run(rootSaga);

    return { store, persistor };
};
