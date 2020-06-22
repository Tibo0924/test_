/**
 * @Info: This is a container, it is a 'chunk' or a 'view' of the application that holds a chunk of state
 * containers connect to the redux store and pass down information just like any other react component
 */

import React from 'react';
import { connect } from 'react-redux';
import { actions } from './actions';
import Homepage from '../../modules/Homepage';
import Summarypage from '../../modules/Summarypage';
import Theme from '../../styles/Theme';

type SomeComponentProps = {
  firstAction: Function,
  lastRefreshed: Number,
  fetchEmployees: Array,
  clickedText: string,
  clickedValue: string,
};

function HomeView({
  clickedText,
  firstAction,
  fetchEmployees,
  clickedValue,
  refresh,

  ...rest
}: SomeComponentProps): React.Node {
  return (
    <>
      {/**
       * Could be good to make use of a 'skeleton' component for reuse accorss different views
       * e.g. this could hold the header, footer and theme etc
       */}
      <Theme />
      <Homepage
        fetchEmployees={fetchEmployees}
        refresh={refresh}
        clickedText={clickedText}
        firstAction={firstAction}
        clickedValue={clickedValue}
        {...rest}
      />
      <Summarypage
        fetchEmployees={fetchEmployees}
        refresh={refresh}
        clickedText={clickedText}
        firstAction={firstAction}
        clickedValue={clickedValue}
        {...rest}
      />
      {/** Other modules */}
    </>
  );
}

/**
 * @Info: Data
 */

function mapStateToProps({ appState, homeViewState }) {
  return {
    clickedText: homeViewState.clickedText,
    employeeData: homeViewState.employeeData,
    clientWidth: appState.clientWidth,
    clickedValue: homeViewState.clickedValue,
    lastRefreshed: homeViewState.lastRefreshed,
  };
}

/**
 * @Info: Functions or 'actions' - note this is a callback that redux uses and gives us the dispatch argument
 * so we can send data to the store
 */
function mapDispatchToProps(dispatch) {
  return {
    firstAction: (clickedText) => dispatch(actions.firstAction(clickedText)),
    refresh: () => dispatch(actions.refresh()),
    fetchEmployees: () => dispatch(actions.fetchEmployees()),
    secondActionForTibor: (clickedValue) => dispatch(actions.secondActionForTibor(clickedValue)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
