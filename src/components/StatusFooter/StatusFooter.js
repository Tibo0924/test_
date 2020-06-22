import React from 'react';
import styled from 'styled-components';
import Footer from '../Footer/Footer';
type StatusProps = {
  status: Boolean,
};
const StatusContainer = styled.div`
  && {
    color: #ed5540;
    margin: 0;
    font-weight: bold;
    padding: 0;
    align-items: center;
    justify-content: center;
    height: 19vh;
    display: flex;
    background: blue;
    flex-direction: column;
  }
`;

export default function Status({ status }: StatusProps): React.Node {
  return (
    <StatusContainer>
      <div>Title</div>
      <div>Switc</div>
    </StatusContainer>
  );
}
