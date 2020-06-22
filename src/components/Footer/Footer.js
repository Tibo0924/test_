import React, { useEffect } from 'react';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { FooterStyle } from '../../styles/FontStyles';

type FooterProps = {
  lastRefreshed: Array<Object>,
};
const StyledContainer = styled(Container)`
  && {
    background: white;
    padding: 10px;
    margin: 0;
    height: 6vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
  }
`;

export default function ConfirmationBox({ lastRefreshed }: FooterProps): React.Node {
  console.log(lastRefreshed);
  useEffect(() => {}, []);
  return (
    <div>
      <StyledContainer>
        <Typography variant="h6" style={FooterStyle}>
          Last refreshed {lastRefreshed} minute ago
        </Typography>
      </StyledContainer>
    </div>
  );
}
