/**
 * @Info: For every action, a saga needs a success action, remember actions need to return a type and data
 */

export const actionTypes = {
  FIRST_ACTION: 'FIRST_ACTION',
  FIRST_ACTION_SUCCESS: 'FIRST_ACTION_SUCCESS',
  FETCH_EMPLOYEES: 'FETCH_EMPLOYEES',
  FETCH_EMPLOYEES_SUCCESS: 'FETCH_EMPLOYEES_SUCCESS',
  SECOND_ACTION_FOR_TIBOR: 'SECOND_ACTION_FOR_TIBOR',
  SECOND_ACTION_FOR_TIBOR_SUCCESS: 'SECOND_ACTION_FOR_TIBOR_SUCCESS',
  REFRESH: 'REFRESH',
  RERFERSH_SUCCESS: 'RERFERSH_SUCCESS',
  ISAVAILABLE: 'ISAVAILABLE',
  ISAVAILABLE_SUCCESS: 'ISAVAILABLE_SUCCESS',
};

export const actions = {
  // saga watches this
  isAvailable: function (isAvailable) {
    return {
      type: actionTypes.ISAVAILABLE,
      isAvailable,
    };
  },
  isAvailableSuccess: function (isAvailable) {
    return {
      type: actionTypes.ISAVAILABLE_SUCCESS,
      isAvailable,
    };
  },
  firstAction: function (clickedText) {
    return {
      type: actionTypes.FIRST_ACTION,
      clickedText,
    };
  },
  // saga fires this
  firstActionSuccess: function (clickedText) {
    return {
      type: actionTypes.FIRST_ACTION_SUCCESS,
      clickedText,
    };
  },

  // saga watches this
  fetchEmployees: function () {
    return {
      type: actionTypes.FETCH_EMPLOYEES,
    };
  },

  // saga fires this
  fetchEmployeesSuccess: function (employeeData) {
    return {
      type: actionTypes.FETCH_EMPLOYEES_SUCCESS,
      employeeData,
    };
  },

  refresh: function () {
    return {
      type: actionTypes.REFRESH,
    };
  },

  refreshSuccess: function (lastRefreshed) {
    return {
      type: actionTypes.RERFERSH_SUCCESS,
      lastRefreshed,
    };
  },
};
