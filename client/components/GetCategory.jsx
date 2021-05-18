import React from 'react';
import { useForm } from 'react-hook-form';
import { InputLabel, OutlinedInput, FormControl, FormControlLabel, Checkbox, Input, Button, makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),

  },
  bgWhite: {
    backgroundColor: theme.palette.common.white,
  },
}));


const GetCategory = () => {
  const categoryCheckboxes = [];
  const categories = {0: "React", 1: "Redux", 2: "Node.js", 3: "Express"}
  const classes = useStyles();
  const [state, setState] = React.useState ({
    checkedA: false,
    checkedB: false,
    checkedF: false,
    checkedG: false,
  });

  // Event method for checkbox (for stretch feature)
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  for (let key in categories){
    categoryCheckboxes.push(
      <FormControlLabel
      className={classes.margin} 
      key={categories[key]}
      control={
        <Checkbox
          checked={state.checkedB}
          onChange={handleChange}
          name={categories[key]}
          key={key}
          color={'primary'}
        />
        }
        label={categories[key]}
      />
    )
  };

  return(
    {categoryCheckboxes}
  );
};

export default GetCategory