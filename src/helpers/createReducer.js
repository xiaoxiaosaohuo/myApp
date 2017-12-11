
/**
 * [createReducer description]
 * @param  {[type]} initialState [初始statte]
 * @param  {[type]} handlers     [处理state的函数]
 * @return {[type]}              [state]
 */

export default function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}
