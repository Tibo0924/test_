import React, { useEffect } from 'react';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Top, Top2, Right, Right2, Left, Left2, Bottom, Bottom2, Border } from './Borders';
import {
  Heading,
  RoundButton,
  CloseButton,
  Paragraph,
  Subtext,
  CapitalSubtext,
} from '../../styles/FontStyles';

type JobStatusBoxProps = {};
const fullHeight = {
  height: '100%',
};
const StyledContainer = styled(Container)`
  && {
    justify-content: center;
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    position: relative;
  }
`;
const NumberStyle = {
  color: 'black',
  fontSize: '100px',
  fontWeight: 'bold',
};

const TitleStyle = {
  fontSize: '16px',
  textTransform: 'uppercase',
  color: 'black',
};

const InfoStyle = {
  fontSize: '19px',
  color: 'black',
};

const StyledGrid = styled(Grid)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ed5540;
    position: relative;
  }
`;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: '55vh',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function JobStatusBox({}: JobStatusBoxProps): React.Node {
  useEffect(() => {}, []);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1} style={fullHeight}>
        <StyledGrid item xs={6}>
          <StyledContainer>
            <a style={TitleStyle}>offers</a>
            <a style={NumberStyle}>01</a>
            <a style={InfoStyle}>1 open 1 responded</a>
          </StyledContainer>
          <Border style={Right}></Border>
          <Border style={Bottom}></Border>
        </StyledGrid>
        <StyledGrid item xs={6}>
          <StyledContainer>
            <a style={TitleStyle}>upcoming</a>
            <a style={NumberStyle}>01</a>
            <a style={InfoStyle}>Next: Tues 16 July</a>
          </StyledContainer>
          <Border style={Left}></Border>
          <Border style={Bottom2}></Border>
        </StyledGrid>
        <StyledGrid item xs={6}>
          <StyledContainer>
            <a style={TitleStyle}>past</a>
            <a style={NumberStyle}>01</a>
            <a style={InfoStyle}></a>
          </StyledContainer>
          <Border style={Top}></Border>
          <Border style={Right2}></Border>
        </StyledGrid>
        <StyledGrid item xs={6}>
          <StyledContainer>
            <a style={TitleStyle}>rating</a>
            <a style={NumberStyle}>01</a>
            <a style={InfoStyle}></a>
          </StyledContainer>
          <Border style={Top2}></Border>
          <Border style={Left2}></Border>
        </StyledGrid>
      </Grid>
    </div>
  );
}
