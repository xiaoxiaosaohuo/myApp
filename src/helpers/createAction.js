/**
 * [createAction description]
 * @param  {[type]} type [action Type]
 * @return {[type]}   extraParams   [其余参数]
 */


 const  createAction = (type) => {
  return (payload, rest = {}) => {
    return {
      type,
      payload,
      ...rest
    };
  };
};

export default createAction
