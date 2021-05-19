import React, { useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import {
  InputLabel,
  OutlinedInput,
  FormControl,
  Select,
  Button,
  makeStyles,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Container,
  Paper,
  ThemeProvider,
} from "@material-ui/core";
import { AuthContext } from "./contexts/Auth";
import "../style.scss";
// import { resetWarningCache } from "prop-types";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(0),
  },
  padding30: {
    padding: theme.spacing(3),
  }
}));

const InputForm = () => {
  // const { user, setUser } = useContext(AuthContext);
  const user = "user01";
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  useEffect(() => {
    // fetch request to the database asking for all categories
    fetch("/categories/")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => console.log("Get Category Error :", err));
  }, []);

  // custom hook for react-hook-form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ userId: user });
  // if the form submit was successful, post the content
  const onSubmit = (data, e) => {
    data.UserID = user;
    console.log("line 51", data, e);
    handleClickOpen();
    // toggleConfirm({ open: true });
    // reset(data);
    //   fetch('/ticket/create', {
    //   method: 'POST',
    //   headers: {'Content-Type': 'Application/JSON'},
    //   body: JSON.stringify(data)
    // })
    // .then(res => res.json())
    // .then(data => {
    //   console.log(data);
    // })
    // .catch(err => console.log('Submit Form Error :', err))
  };
  // if the form submit was unsuccessful, invoke this callback
  const onError = (errors, e) => console.log(errors, e);
  // apply style classes
  const classes = useStyles();

  // This will watch specified inputs and return their values.
  // It is useful for determining what to render.
  // console.log(watch('example'));
  // Checkbox options. This should be populated with fetch request to category table

  return (
    <div>
      <Link to="/dashboard" variant="body2" className={classes.margin}>
      <u> &lt; Go Back</u>
      </Link>
      <Container component={Paper} className={classes.padding30}>
        <h1 className={classes.margin}>Puffdesk Input Form</h1>
        <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
          <FormControl fullWidth className={classes.margin} variant="outlined">
            <InputLabel htmlFor="ProblemStatement">Problem</InputLabel>
            <OutlinedInput
              required
              label="Required"
              id="ProblemStatement"
              labelWidth={48}
              {...register("ProblemStatement")}
            />
          </FormControl>
          <FormControl fullWidth className={classes.margin} variant="outlined">
            <InputLabel htmlFor="ExpectedBehavior">
              What I expected to happen
            </InputLabel>
            <OutlinedInput
              required
              id="ExpectedBehavior"
              labelWidth={210}
              {...register("ExpectedBehavior")}
            />
          </FormControl>
          <FormControl fullWidth className={classes.margin} variant="outlined">
            <InputLabel htmlFor="TriedSolution">What I've tried</InputLabel>
            <OutlinedInput
              required
              id="TriedSolution"
              labelWidth={101}
              {...register("TriedSolution")}
            />
          </FormControl>
          <FormControl fullWidth className={classes.margin} variant="outlined">
            <InputLabel htmlFor="SuspectedIssue">
              Why I suspect it's not working:
            </InputLabel>
            <OutlinedInput
              required
              id="SuspectedIssue"
              labelWidth={250}
              {...register("SuspectedIssue")}
            />
          </FormControl>
          <FormControl fullWidth className={classes.margin} variant="outlined">
            <InputLabel htmlFor="description">Category</InputLabel>
            <Select
              native
              id="description"
              label="Category"
              {...register("description")}
            >
              <option aria-label="None" value="" />
              {categories.map((category) => (
                <option key={category.CategoryId} value={category.CategoryId}>
                  {category.description}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth className={classes.margin} variant="outlined">
            <InputLabel htmlFor="ZoomLink">Zoom Link</InputLabel>
            <OutlinedInput
              required
              id="ZoomLink"
              labelWidth={76}
              {...register("ZoomLink")}
            />
          </FormControl>
          <Button
            className={classes.margin}
            variant="contained"
            color="primary"
            type="submit"
          >
            Submit
          </Button>
        </form>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Your Form has been submitted."}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Please give some time for the fellows to respond.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary" autoFocus href="/dashboard">
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </div>
  );
};

export default InputForm;
