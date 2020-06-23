import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import SimpleTable from '../../components/tables/tableSolicitations'
import Fab from '@material-ui/core/Fab';


const useStyles = makeStyles((theme) => ({
    modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #000',
    background: 'linear-gradient(45deg, #2196F3 20%, #21CBF3 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    padding: theme.spacing(2, 4, 3),
    height: 410,
    width: 800,
  },
  button: {
    border: 'border: solid #0059A0 1px',
    backgroundColor: '#3D94F6',
    background: '#3D94F6;',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    padding: theme.spacing(3, 4, 3),
  },
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Fab variant="extended"
          aria-label="add"
          className={classes.button}
          type="button" 
          style={{marginLeft: "300px", width: "200"}}
          onClick={handleOpen}>
        Table
      </Fab>
      <Fab variant="extended"
          color="primary"
          aria-label="add"
          style={{width: "200px"}}
          className={classes.button}
          type="button" 
          onClick={handleOpen}>
        Mapas
      </Fab>
      <Fab variant="extended"
          color="primary"
          aria-label="add"
          style={{width: "200px"}}
          className={classes.button}
          type="button" 
          onClick={handleOpen}>
        Formulário
      </Fab>
      <Fab variant="extended"
          color="primary"
          aria-label="add"
          style={{width: "200px"}}
          className={classes.button}
          type="button" 
          onClick={handleOpen}>
        ListView
      </Fab>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Pedidos Pendentes</h2>
            <p id="transition-modal-description"><SimpleTable/></p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
