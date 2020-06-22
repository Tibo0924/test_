import React from 'react';
import styled from 'styled-components';

type StatusProps = {
  status: Boolean,
};
const StyledStatus = styled.span`
  && {
    color: #ed5540;
    margin: 0;
    font-weight: bold;
    padding: 0;
  }
`;

export default function Status({ status }: StatusProps): React.Node {
  return (
    <div>
      <StyledStatus>STATUS:</StyledStatus> {status ? 'available' : 'not available'} for work
    </div>
  );
}
