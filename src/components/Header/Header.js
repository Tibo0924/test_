import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import BadgeAvatar from '../BadgeAvatar';
import EmployeeDetails from '../EmployeeDetails';
import styled from 'styled-components';
type HeaderProps = {
  employeeData: Array<Object>,
  fetchEmployees: Function,
};
const StyledGrid = styled(Grid)`
  height: 20vh;
`;

export default function Header({ fetchEmployees, employeeData }: HeaderProps): React.Node {
  useEffect(() => {
    fetchEmployees();
  }, []);
  return (
    <StyledGrid container alignItems="center" justify="center">
      <Grid item>{employeeData && employeeData[0] && <BadgeAvatar user={employeeData[0]} />}</Grid>
      <Grid>
        <EmployeeDetails user={employeeData && employeeData[0]} />
      </Grid>
    </StyledGrid>
  );
}
