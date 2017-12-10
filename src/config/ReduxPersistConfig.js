/**
 * @desc [redux store持久化配置]
 */
import immutablePersistenceTransform from '../services/ImmutablePersistenceTransform'
import { AsyncStorage } from 'react-native'

const REDUX_PERSIST = {
  active: true,
  reducerVersion: '1.0',
  storeConfig: {
    storage: AsyncStorage,
    blacklist: ['nav'], // reducer keys ,不想持久化黑名单
    // whitelist: [], 白名单
    // persistence. An empty array means 'don't store any reducers' -> infinitered/ignite#409
    transforms: [immutablePersistenceTransform]
  }
}

export default REDUX_PERSIST
