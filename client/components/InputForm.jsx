import React from 'react';
import { useForm } from 'react-hook-form';
import { InputLabel, OutlinedInput, FormControl, FormControlLabel, Checkbox, Input, Button, makeStyles } from '@material-ui/core';
import '../style.scss'
// import GetCategory from './GetCategory.jsx'

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),

  },
  bgWhite: {
    backgroundColor: theme.palette.common.white,
  },
}));



const InputForm = () => {
  // custom hook for react-hook-form
  const { register, handleSubmit, watch, formState: { errors }} = useForm();
  // if the form submit was successful, invoke this callback
  const onSubmit = (data, e) => console.log(data, e);
  // if the form submit was unsuccessful, invoke this callback
  const onError = (errors, e) => console.log(errors, e);
  // apply style classes
  const classes = useStyles();
  // This will watch specified inputs and return their values. 
  // It is useful for determining what to render.
  console.log(watch('example'));
  // Checkbox options. This should be populated with fetch request to category table

  



  return (
    <div>
      <h1 className={classes.margin}>Puffdesk Input Form</h1>
      <form className={classes.root} onSubmit={handleSubmit(onSubmit, onError)}>
          {/* Check boxes 
          <FormControlLabel
          className={classes.margin} 
          control={
            <Checkbox
              checked={state.checkedB}
              onChange={handleChange}
              name="checkedA"
              color="primary"
            />
            }
            label="React"
          />
          */}
          <FormControl fullWidth className={classes.margin} variant="outlined">
            <InputLabel htmlFor="field-problem">Problem</InputLabel>
            <OutlinedInput
              required
              label="Required" 
              id="field-problem"
              labelWidth={48}
            />
          </FormControl>
          <FormControl fullWidth className={classes.margin} variant="outlined">
            <InputLabel htmlFor="field-expect">What I expected to happen</InputLabel>
            <OutlinedInput
              required
              id="field-expect"
              labelWidth={210}
              {...register("field-expect")}
            />
          </FormControl>
          <FormControl fullWidth className={classes.margin} variant="outlined">
            <InputLabel htmlFor="field-tried">What I've tried</InputLabel>
            <OutlinedInput
              required
              id="field-tried"
              labelWidth={101}
              {...register("field-tried")}
            />
          </FormControl>
          <FormControl fullWidth className={classes.margin} variant="outlined">
            <InputLabel htmlFor="field-why">Why I suspect it's not working:</InputLabel>
            <OutlinedInput
              required
              id="field-why"
              labelWidth={250}
              {...register("field-why")}
            />
          </FormControl>
          <FormControl fullWidth className={classes.margin} variant="outlined">
            <InputLabel htmlFor="field-zoom">Zoom Link</InputLabel>
            <OutlinedInput
              required
              id="field-zoom"
              labelWidth={76}
              {...register("field-zoom")}
            />
          </FormControl>
          {/* <GetCategory /> */}
          {/* <FormControlLabel
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
              /> */}
          <Button className={classes.margin} variant="contained" color="primary" type="submit" >
            Submit
          </Button>
      </form>
    </div>
  );
};

export default InputForm;