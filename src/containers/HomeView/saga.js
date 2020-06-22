import { actions, actionTypes } from './actions';
import { take, put, all, fork, call } from 'redux-saga/effects';
import { fetchInitialData, refresh } from '../../api';

/**
 * @Info: This is the weird part - sagas. All they do really is watch for actions, and then fire off
 * a success actions. That's it!!!! Simple
 */
export function* watchMyFirstAction() {
  while (true) {
    const { clickedText } = yield take(actionTypes.FIRST_ACTION);
    yield put(actions.firstActionSuccess(clickedText));
  }
}

export function* watchFetchEmployees() {
  while (true) {
    yield take(actionTypes.FETCH_EMPLOYEES);
    const someArgument = 'this will no nothing, but will be passed to the api';
    const employeeData = yield call(fetchInitialData, someArgument);
    yield put(actions.fetchEmployeesSuccess(employeeData));
  }
}

export function* watchTiborsAction() {
  while (true) {
    const { clickedValue } = yield take(actionTypes.SECOND_ACTION_FOR_TIBOR);
    yield put(actions.secondActionForTiborSucces(clickedValue));
  }
}

export function* watchRefresh() {
  while (true) {
    yield take(actionTypes.REFRESH);
    const lastRefreshed = yield call(refresh);
    yield put(actions.refreshSuccess(lastRefreshed));
  }
}

/**
 * @Info: The watcher is above, then we fork it here, which will be imported into our root reducer
 * weird syntax but that's basically it - no need to understand too much what's going on here
 */
export default function* homeViewSaga() {
  yield all([
    fork(watchMyFirstAction),
    fork(watchRefresh),
    fork(watchFetchEmployees),
    fork(watchTiborsAction),
  ]);
}
