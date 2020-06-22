import React, { useEffect } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import JobStatusBox from '../../components/JobStatusBox';
import StatusFooter from '../../components/StatusFooter';
import Footer from '../../components/Footer';
type SummarypageProps = {
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
  padding: 10px 0 0 0;
`;

export default function SummaryPage({
  fetchEmployees,
  employeeData,
  isConfirmed,
  refresh,
  lastRefreshed,
}: SummarypageProps): React.Node {
  useEffect(() => {
    fetchEmployees();
  }, []);
  useEffect(() => {
    refresh();
  }, []);
  return (
    <StyledWrapper>
      <Header employeeData={employeeData} fetchEmployees={fetchEmployees} />
      <JobStatusBox isConfirmed={isConfirmed} />
      <StatusFooter refresh={refresh} lastRefreshed={lastRefreshed} />
      <Footer refresh={refresh} lastRefreshed={lastRefreshed} />
    </StyledWrapper>
  );
}
