import React, { useState }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
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
  select: {
    textAlign: 'left'
  },
}));

const DropDown = ({ placeholder = '', items = [], value = '', onChange = () => { }, emptyValueMsg=''}) => {
  const classes = useStyles();
  const [currentSelect, setCurrentSelect] = useState(value);
  const handleChange = (event) => {
    onChange(event.target.value, placeholder, currentSelect);
    setCurrentSelect(event.target.value); 
  };
  return (
    <>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel>{placeholder}</InputLabel>
        <Select
          value={value}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'Without label' }}
          label={placeholder}
          className={classes.select}
        >
          {items && items.length !== 0 ? 
          items.map((item, index) => <MenuItem disabled={item.selected} key={item + '-' + index} value={item.value ? item.value : item}>{item.value ? item.value : item}</MenuItem>) :
          <MenuItem disabled>{emptyValueMsg}</MenuItem>
          
        }
        </Select>
      </FormControl>
    </>
  );
};

export default DropDown;