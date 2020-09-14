import React from 'react';
import Button from '@material-ui/core/Button';

const ControlledButton = ({ value, onClick = () => { }, disabled = false }) => {
  return (
    <>
      <Button variant="contained" onClick={onClick} color='primary' disabled={disabled}>
        {value}
      </Button>
    </>
  );
};

export default ControlledButton;