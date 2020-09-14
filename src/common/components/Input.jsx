import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
  formControl: {
    [theme.breakpoints.down('sm')]: {
      width: '10ch'
    },
    [theme.breakpoints.up('md')]: {
      width: '15ch'
    },
    [theme.breakpoints.up('lg')]: {
      width: '20ch'
    },
    [theme.breakpoints.up('xl')]: {
      width: '25ch'
    },
    margin: theme.spacing(1),
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
      [theme.breakpoints.down('xs')]: {
        width: '10ch'
      },
      [theme.breakpoints.up('sm')]: {
        width: '15ch'
      },
      [theme.breakpoints.up('md')]: {
        width: '25ch'
      },
    },
  },
}));

const Input = ({ placeholder = '', value = '', onChange = () => { }, disabled = false }) => {
  const classes = useStyles();
  const handleOnChange = (e) => {
    onChange(e.target.value, placeholder);
  };

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <TextField variant="outlined" label={placeholder} disabled={disabled} value={value} onChange={handleOnChange} />
    </FormControl>
  );
};

export default Input;