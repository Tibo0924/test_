import { actionTypes } from './actions';
import produce from 'immer';

/**
 * @Info: Reducers take actions and return state
 * In the saga set up container reducers should only take success actions
 */

const initialState = {
  employeeData: [],
  clickedValue: '',
  lastRefreshed: 0,
};

export default function homeViewState(state = initialState, action = {}) {
  return produce(state, (draft) => {
    switch (action.type) {
      case actionTypes.FIRST_ACTION_SUCCESS:
        draft.clickedText = action.clickedText;
        return draft;

      case actionTypes.FETCH_EMPLOYEES_SUCCESS:
        draft.employeeData = action.employeeData;
        return draft;

      case actionTypes.SECOND_ACTION_FOR_TIBOR_SUCCESS:
        draft.clickedValue = action.clickedValue;
        return draft;

      case actionTypes.RERFERSH_SUCCESS:
        draft.lastRefreshed = action.lastRefreshed;
        return draft;

      default:
        return state;
    }
  });
}
