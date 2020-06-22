import React, { useEffect } from 'react';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import {
  Heading,
  RoundButton,
  CloseButton,
  Paragraph,
  Subtext,
  CapitalSubtext,
} from '../../styles/FontStyles';

type ConfirmationBoxProps = {
  isConfirmed: Boolean,
};
const StyledContainer = styled(Container)`
  && {
    background: ${(props) => (props.isConfirmed ? '#ED5540' : '#4a4a4a')};
    padding: 0.625em;
    margin: 0;
    height: 74vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    text-align: center;
  }
`;

export default function ConfirmationBox({ isConfirmed }: ConfirmationBoxProps): React.Node {
  useEffect(() => {}, []);
  return (
    <div>
      <StyledContainer isConfirmed={isConfirmed}>
        <Typography variant="h3" style={Heading}>
          Thank you
        </Typography>
        <Typography variant="p" style={Paragraph}>
          Your availability and interest has been registered.
        </Typography>
        <Button style={RoundButton}>{isConfirmed ? 'YES' : 'NO'}</Button>
        <Typography variant="p" style={CapitalSubtext}>
          What happens next?
        </Typography>
        <Typography variant="p" style={Subtext}>
          If you are successful we will contact you by 9 am Tuesday 16th of June.
        </Typography>
        <Button style={CloseButton}>+</Button>
      </StyledContainer>
    </div>
  );
}
