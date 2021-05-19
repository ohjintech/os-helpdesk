import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #000',
    boxShadow: theme.shadows[5],
    width: '45rem',
    padding: theme.spacing(2, 4, 2),
  },
  root: {
    '& .MuiTextField-root': {
      marginBottom: theme.spacing(2),
      width: '100%',
    },
  },
}));

function TicketDetails(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.open}
        onClose={props.onClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <div className={classes.paper}>
            <form className={classes.root} noValidate autoComplete="off">
              <div>
                <div>
                <TextField
                  id="outlined-multiline-flexible"
                  label="Problem Statement"
                  multiline
                  rowsMax={4}
                  value={props.details.ProblemStatement}
                  variant="outlined"
                />
                </div>
                <TextField
                  id="outlined-multiline-flexible"
                  label="What I expected to happen"
                  multiline
                  rowsMax={4}
                  value='bsdfksdjb fsbfksd ufbksdbhkufsdnbilfisugbosfhgks hgs shv sdohkuvbskioskvbs kvbskvs'
                  variant="outlined"
                />
                <TextField
                  id="outlined-multiline-flexible"
                  label="What I've tried"
                  multiline
                  rowsMax={4}
                  value='bsdfksdjb fsbfksd ufbksdbhkufsdnbilfisugbosfhgks hgs shv sdohkuvbskioskvbs kvbskvs'
                  variant="outlined"
                />
                <TextField
                  id="outlined-multiline-flexible"
                  label="Why I suspect it's not working"
                  multiline
                  rowsMax={4}
                  value='bsdfksdjb fsbfksd ufbksdbhkufsdnbilfisugbosfhgks hgs shv sdohkuvbskioskvbs kvbskvs'
                  variant="outlined"
                />
                <TextField
                  id="outlined-multiline-flexible"
                  label="Category"
                  multiline
                  rowsMax={4}
                  value='bsdfksdjb fsbfksd ufbksdbhkufsdnbilfisugbosfhgks hgs shv sdohkuvbskioskvbs kvbskvs'
                  variant="outlined"
                />
                <TextField
                  id="outlined-multiline-flexible"
                  label="Zoom Link"
                  multiline
                  rowsMax={4}
                  value='bsdfksdjb fsbfksd ufbksdbhkufsdnbilfisugbosfhgks hgs shv sdohkuvbskioskvbs kvbskvs'
                  variant="outlined"
                />
              </div>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  )
}

export default TicketDetails