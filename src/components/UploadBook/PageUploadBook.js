import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import UploadBook from './UploadBook';


const useStyles = makeStyles({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: 'white',
    border: '2px solid #000',
    padding: '10px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
});

const SimpleModal = () => {
  const classes = useStyles();
  const [modalStyle] = React.useState();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <UploadBook />
    </div>
  );

  return (
    <Fragment>
      <a onClick={handleOpen}>
        Open Modal
      </a>
      <Modal
        open={open}
        onClose={handleClose}
      >
        {body}
      </Modal>
    </Fragment>
  );
}

export default SimpleModal;