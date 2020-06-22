/**
 * @Info: Actions in our top level don't need a success action, we are just going to use a regular dispatch
 * in this set up we are not using a saga for the 'APP'
 */

export const actionTypes = {
  SET_CLIENT_WIDTH: 'SET_CLIENT_WIDTH',
  ISCONFIRMED: 'ISCONFIRMED',
  REFRESH: 'REFRESH',
};

export const actions = {
  setClientWidth: function (clientWidth) {
    return {
      type: actionTypes.SET_CLIENT_WIDTH,
      clientWidth,
    };
  },

  // will I need this after all ?
  setIsConfirmed: function (isConfirmed) {
    return { type: actionTypes.ISCONFIRMED, isConfirmed };
  },
};
