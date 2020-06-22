import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import styled from 'styled-components';

const StyledAvatar = styled(Avatar)`
  && {
    width: 100px;
    height: 100px;
    padding: 0;
    &.MuiGrid-root.MuiGrid-item {
      padding: 0;
    }
  }
`;

type AvatarProps = {
  user: Array<Object>,
};
export default function BadgeAvatars({ user }: AvatarProps): React.Node {
  return (
    <div>
      <StyledAvatar alt="Remy Sharp" src={user.picture.large} />
    </div>
  );
}
