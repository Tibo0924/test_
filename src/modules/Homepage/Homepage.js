/**
 * @Info: A module is just a structure that contains smaller components, a header is a good example here
 * as this might be made up of a few different components
 */

import React, { useEffect } from 'react';
import styled from 'styled-components';
import ConfirmationBox from '../../components/Box';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
type Homepageprops = {
  firstAction: Function,
  clickedText: string,
  clientWidth: number,
  employeeData: Array<Object>,
  lastRefreshed: Array<Object>,
  fetchEmployees: Function,
  refresh: Function,
  secondActionForTibor: Function,
  clickedValue: string,
  isConfirmed: Boolean,
};

const StyledWrapper = styled.header`
  background: white;
  box-shadow: 5px -12px 41px 9px lightgrey;
  background: #ebf2ec;
  padding: 0px;
`;

export default function Homepage({
  fetchEmployees,
  employeeData,
  isConfirmed,
  refresh,
  lastRefreshed,
}: Homepageprops): React.Node {
  useEffect(() => {
    fetchEmployees();
    refresh();
  }, []);

  return (
    <StyledWrapper>
      <Header employeeData={employeeData} fetchEmployees={fetchEmployees} />
      <ConfirmationBox isConfirmed={isConfirmed} />
      <Footer refresh={refresh} lastRefreshed={lastRefreshed} />
    </StyledWrapper>
  );
}
