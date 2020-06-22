/**
 * @Info: In this structure, components should be smaller single items that don't contain many other components
 * e.g. Button, Image, Modal, Loader, etc
 */

import React from 'react';
import Button from '@material-ui/core/Button';

type RandomButtonProps = {
  clickHandler: Function,
  text: String,
  color: String,
};

export default function RandomButton({ clickHandler, text, color }: RandomButtonProps): React.Node {
  const handleButtonClick = () => {
    clickHandler('Some dummy text');
  };

  return (
    <div>
      <Button variant="text" color={color || 'default'} text={text} onClick={handleButtonClick}>
        {text}
      </Button>
    </div>
  );
}
