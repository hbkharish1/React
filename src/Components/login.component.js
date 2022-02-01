import React from 'react';
// import { connect } from 'react-redux';
import { Redirect } from "react-router";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { withStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Copyright from '../Layouts/Footer';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const styles = theme  => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class Login extends React.Component {

  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
    fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((json) => console.log(json));

  };

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });

  }

  submituserRegistrationForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
        let fields = {};
        fields["emailid"] = "";
        fields["password"] = "";
        this.setState({fields:fields});
        alert("Form submitted");
    }

  }

  renderRedirect = () => {
    if (this.state.redirect) {
        return <Redirect to='/Dashboard' />
    }
    
}
renderRedirect1 = () => {
  if (this.state.redirect) {
      return <Redirect to='/sign-in' />
  }
  
}

  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;



    if (!fields["emailid"]) {
      formIsValid = false;
      errors["emailid"] = "*Please enter your email-ID.";
    }

    if (typeof fields["emailid"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(fields["emailid"])) {
        formIsValid = false;
        errors["emailid"] = "*Please enter valid email-ID.";
      }
    }



    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    if (typeof fields["password"] !== "undefined") {
      if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
        formIsValid = false;
        errors["password"] = "*Please enter secure and strong password.";
      }
    }


    const localemail=localStorage.getItem("emailid");
    const localpass=localStorage.getItem("password");
    // console.log(localemail);
    // console.log(localpass);
    // console.log(email);
    // console.log(password);
       if(fields["emailid"] === localemail && fields["password"] === localpass){
        console.log("true");
        this.setState({ redirect: true })
        this.renderRedirect();
        
        // history.push('/Dashboard');
        // return <Redirect to="/Dashboard" />;
    }
    else{
      console.log("false");
      this.setState({ redirect: false })
      this.renderRedirect1();

      // return <Redirect to="/Dashboard" />;
    }

    this.setState({
      errors: errors
    });
    return formIsValid;

  }

  render() {
      // const {count} = this.props;
      const { classes } = this.props;

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      {/* <div>{count}</div> */}
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AccountCircleIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={this.submituserRegistrationForm}>
          {this.renderRedirect()}
          <TextField
            variant="outlined"
            value={this.state.fields.emailid}
            onChange={this.handleChange}
            margin="normal"
            required
            fullWidth
            id="emailid"
            label="Email Address"
            name="emailid"
            autoComplete="email"
            autoFocus
          />
          <div className="errorMsg">{this.state.errors.emailid}</div>
          <TextField
            variant="outlined"
            value={this.state.fields.password}
            onChange={this.handleChange}
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
           <div className="errorMsg">{this.state.errors.password}</div>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/sign-up" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
}
export default withStyles(styles)(Login);
// export default connect(
//   Login.mapStateToProps,
//   )(Login)