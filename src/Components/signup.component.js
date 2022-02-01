import React from 'react';
import {Redirect}   from "react-router";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Copyright from '../Layouts/Footer';
// import { Formik, Form,ErrorMessage,Field as TextField } from "formik";
// import * as Yup from "yup";

// const LoginSchema = Yup.object().shape({
//     email: Yup.string()
//       .email("Invalid email address format")
//       .required("Email is required"),
//     password: Yup.string()
//       .min(8, "Password must be 8 characters at minimum")
//       .required("Password is required")
//   });

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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class SignUp extends React.Component {

    constructor() {
        super();
        this.state = {
          fields: {},
          errors: {},
          redirect: false
        }
    
        this.handleChange = this.handleChange.bind(this);
        this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
    
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
            this.setState({redirect:true});
            this.renderRedirect();
            fields["firstName"] = "";
            fields["emailid"] = "";
            fields["lastName"] = "";
            fields["password"] = "";
            this.setState({fields:fields});
            alert("Form submitted");
        }
    
      }
    
      renderRedirect (){
        if (this.state.redirect) {
          console.log(this.state.redirect);
            return <Redirect to='/sign-in' />
        }
      }

      validateForm() {
    
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
    
        if (!fields["firstName"]) {
          formIsValid = false;
          errors["firstName"] = "*Please enter your firstName.";
        }
    
        if (typeof fields["firstName"] !== "undefined") {
          if (!fields["firstName"].match(/^[a-zA-Z ]*$/)) {
            formIsValid = false;
            errors["firstName"] = "*Please enter alphabet characters only.";
          }
        }

        if (!fields["lastName"]) {
            formIsValid = false;
            errors["lastName"] = "*Please enter your lastName.";
          }
      
          if (typeof fields["lastName"] !== "undefined") {
            if (!fields["lastName"].match(/^[a-zA-Z ]*$/)) {
              formIsValid = false;
              errors["lastName"] = "*Please enter alphabet characters only.";
            }
          }

    
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
        localStorage.setItem('emailid', fields["emailid"]);
        localStorage.setItem('password', fields["password"]);
        this.setState({
          errors: errors
        });
        return formIsValid;
    
    }
//   const classes = useStyles();
render() {
    // const {count} = this.props;
    const { classes } = this.props;
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AccountCircleIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        {/* <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={LoginSchema}
              onSubmit={({ setSubmitting }) => {
                alert("Form is validated! Submitting the form...");
                setSubmitting(false);
              }}
            >
              {({ touched, errors, isSubmitting }) => ( */}
        <form className={classes.form}  noValidate onSubmit={this.submituserRegistrationForm} >{this.renderRedirect()}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                value={this.state.fields.firstName}
                onChange={this.handleChange}
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
              <div className="errorMsg">{this.state.errors.firstName}</div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                value={this.state.fields.lastName}
                onChange={this.handleChange}
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              /><div className="errorMsg">{this.state.errors.lastName}</div>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                value={this.state.fields.emailid}
                onChange={this.handleChange}
                required
                fullWidth
                id="emailid"
                label="Email Address"
                name="emailid"
                autoComplete="email"
                // className={`form-control ${
                //     touched.email && errors.email ? "is-invalid" : ""
                //   }`}
              />
               {/* <ErrorMessage
                      component="div"
                      name="email"
                      className="invalid-feedback"
                    /> */}
                    <div className="errorMsg">{this.state.errors.emailid}</div>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                value={this.state.fields.password}
                onChange={this.handleChange}
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                // className={`form-control ${
                //     touched.password && errors.password ? "is-invalid" : ""
                //   }`}
              />
               {/* <ErrorMessage
                      component="div"
                      name="password"
                      className="invalid-feedback"
                    /> */}
                    <div className="errorMsg">{this.state.errors.password}</div>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Accepting the Terms and Conditions."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/sign-in" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
          {/* )}
          </Formik>  */}
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
}
export default withStyles(styles)(SignUp);