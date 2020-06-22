import React from 'react';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
import styled from 'styled-components';
import Status from '../Status/Status';

type EmployeeProps = {
  user: Array<Object>,
};
export default function EmployeeDetails({ user }: EmployeeProps): React.Node {
  const [value, setValue] = React.useState(4);
  const StyledRatings = styled(Rating)`
    && {
      color: #ed5540;
      margin: 0;
      padding: 0;
    }
  `;
  const StyledNames = styled.div`
    letter-spacing: -1px;
    font-size: 29px;
    text-transform: uppercase;
  `;
  return (
    <div>
      <Box component="fieldset" m={0} borderColor="transparent">
        {user && (
          <StyledNames>
            {user.name.first} {user.name.last}
          </StyledNames>
        )}
        {user && user.isAvailable && <Status status={user.isAvailable} />}
        <br></br>
        <StyledRatings
          name="simple"
          readOnly={true}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>{' '}
    </div>
  );
}
