/* eslint-disable react-hooks/exhaustive-deps */
import React,{useEffect} from "react";
// import axios from "axios";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {connect} from 'react-redux'
import {fetchUsers} from '../Actions/userActions'
import Modal from '@material-ui/core/Modal';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
// import IconButton from '@material-ui/core/IconButton';
// function rand() {
//   return Math.round(Math.random() * 20) - 10;
// }

function getModalStyle() {
  const top = 50;
  const left = 50;
  return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
  };
}

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
},
paper: {
    position: 'absolute',
    width: 450,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
},
moving:{
  position:'absolute',
  top:95,
  right:60
}
}));


const mapStateToProps = state =>    {
  return {
      userData : state.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
      fetchUsers:() => dispatch(fetchUsers())
  }
}


function DataFetching({userData,fetchUsers}) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [Createopen, CreatesetOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
};

const handleClose = () => {
    setOpen(false);
};

// handleEdit = (e) => {
//   e.preventDefault();
//   const name = this.getName.value;
//   const email = this.getEmail.value;
//   const data = {
//     name,
//     email
//   }
//   this.props.dispatch({ UpdateUser, id: this.props.post.id, data: data })
// }


const CreatehandleOpen = () => {
  CreatesetOpen(true);
};

const CreatehandleClose = () => {
  CreatesetOpen(false);
};


  useEffect(()=>
  {
      fetchUsers()
  },[])
  return userData.loading ?  (
    <h2>Loading</h2>
) :userData.error ?( <h2>{userData.error}</h2>)
:(
  <div>         
  <Button
  variant="contained"
  color="primary"
  size="medium"
  className={classes.moving}
  startIcon={<AddIcon />}
  onClick={CreatehandleOpen}
>
  Create
</Button>
    <TableContainer component={Paper}>

      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="left">Name</StyledTableCell>
            <StyledTableCell align="left">Email&nbsp;</StyledTableCell>
            <StyledTableCell align="left">Actions&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {userData &&
             userData.map((user) =>
            <StyledTableRow key={user.id}>
              <StyledTableCell component="th" scope="row">
                {user.id}
              </StyledTableCell>
              <StyledTableCell align="left">{user.name}</StyledTableCell>
              <StyledTableCell align="left">{user.email}</StyledTableCell>
              <StyledTableCell align="left">
              <Button size="small" variant="contained" color="primary" onClick={handleOpen} startIcon={<EditIcon />}>
                Edit
              </Button> 
               <Button size="small"  variant="contained" color="secondary" startIcon={<DeleteIcon />}>
                Delete
              </Button>
              {/* <IconButton aria-label="edit" className={classes.margin} onClick={handleOpen}>
              <EditIcon fontSize="small" />
              </IconButton>
              <IconButton aria-label="delete" className={classes.margin}>
              <DeleteIcon fontSize="small" />
              </IconButton> */}
              </StyledTableCell>
            </StyledTableRow>
          )}
        </TableBody>
      </Table>
      <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={Createopen}
                onClose={CreatehandleClose}
            >
                <div style={modalStyle} className={classes.paper}>
                <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
          /><br />
                    <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
          /><br /><br />
                <Button variant="contained" color="primary" >
                Create
              </Button>
                </div>
            </Modal>


            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}>
                {/* <form onSubmit={this.handleEdit}> */}
                  <form>
                {userData &&
             userData.map((user) =>
             <div key={user.id}>
                <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            value={user.name}
            name="name"
            autoComplete="name"
            autoFocus
          /><br />
                    <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            value={user.email}
            name="email"
            autoComplete="email"
            autoFocus
          /><br /><br />
                <Button variant="contained" color="primary" >
                Update
              </Button></div>)}
              
              </form>
                </div>
            </Modal>
    </TableContainer>
    </div>
)
}


export default connect (mapStateToProps,mapDispatchToProps) (DataFetching)