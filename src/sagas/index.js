/**
 * @desc [saga注册入口文件]
 */
import { fork, takeEvery,all } from 'redux-saga/effects';
import LoginSagas from './LoginSagas';
import StartAppSagas from './StartAppSagas';
/* ------------- Sagas ------------- */
// 使用 redux-saga 管理 异步任务
const sagas = [
  ...LoginSagas,
  ...StartAppSagas
];

/* -------------------------- */

export default function * root() {
   yield all(sagas.map(saga => fork(saga)));
};
