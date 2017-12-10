import Config from './DebugConfig';
import Immutable from 'immutable';
import Reactotron,{networking} from 'reactotron-react-native';
import { reactotronRedux as reduxPlugin } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

if (Config.useReactotron) {
  Reactotron
    .configure({ name: 'Os App' })
    // .use(trackGlobalErrors())
    //  .use(overlay())
    .useReactNative()
    .use(reduxPlugin({ onRestore: Immutable }))
    .use(sagaPlugin())
    .use(networking())
    .connect();

  // 每次加载app时，执行日志清理
  Reactotron.clear();

  // 不用再每个文件再次引入Reactotron
  console.tron = Reactotron;
}
