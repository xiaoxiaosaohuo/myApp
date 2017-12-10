import { createStore, applyMiddleware, compose } from 'redux';
import { autoRehydrate } from 'redux-persist-immutable';
import Config from '../config/DebugConfig';
import createSagaMiddleware from 'redux-saga';
// import RehydrationServices from '../services/RehydrationServices';
// import ReduxPersist from '../config/ReduxPersistConfig';
// import ScreenTracking from '../middlewares/ScreenTrackingMiddleware';
//创建store
export default (rootReducer,rootSaga,initialState)=>{
    const middleware = [];
    const enhancers = [];

    const sagaMonitor = Config.useReactotron ? console.tron.createSagaMonitor() : null;
    const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
    middleware.push(sagaMiddleware);
    enhancers.push(applyMiddleware(...middleware));
    //如果支持Reactotron，就通过Reactotron创建store
    const createAppropriateStore = Config.useReactotron ? console.tron.createStore : createStore;
    const store = createAppropriateStore(rootReducer, initialState, compose(...enhancers));

    //持久化
    // if (ReduxPersist.active) {
    //     RehydrationServices.updateReducers(store);
    // }


    sagaMiddleware.run(rootSaga);
    return store;
}
