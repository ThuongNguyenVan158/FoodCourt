import React from 'react';
import { useStyles } from './login.style.page';
import { Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const renderSignInPage = (event) => {
  document.getElementById('signUpPage').style.transition = 'all 0.5s';
  document.getElementById('signInPage').style.transition =
    '0.7s 0.5s ease-in-out';
  document.getElementById('signInPage').style.transform = 'translateX(0px)';
  document.getElementById('signUpPage').style.transform = 'translateX(100%)';
};

const renderSignUpPage = (event) => {
  document.getElementById('signUpPage').style.transition =
    '0.7s 0.5s ease-in-out';
  document.getElementById('signInPage').style.transition = 'all 0.5s';
  document.getElementById('signInPage').style.transform = 'translateX(-100%)';
  document.getElementById('signUpPage').style.transform = 'translateX(0px)';
};

function SignIn() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* <div style={{ height: '70px' }}></div> */}
      <div className={classes.flexBox}>
        <div className={classes.signIn} id="signInPage">
          <div className={classes.boxSignIn}>
            <div className={classes.it}>
              <div className={classes.btnChangePage}>
                <Button
                  onClick={renderSignUpPage}
                  variant="contained"
                  color="primary"
                >
                  Sign Up
                </Button>
              </div>
            </div>
            <div className={classes.it}>
              <div className={classes.itBox}>
                <div className={classes.formBox}>
                  <div className={classes.title}>SIGN IN</div>
                  <form action="" autoComplete="off">
                    <div className={classes.inputField}>
                      <PersonIcon />
                      <input
                        type="text"
                        name="username"
                        placeholder="username"
                      ></input>
                    </div>
                    <div className={classes.inputField}>
                      <LockIcon />
                      <input
                        type="password"
                        name="password"
                        placeholder="password"
                      ></input>
                    </div>
                    <div className={classes.btnBox}>
                      <Button type="submit">Sign In</Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.signUp} id="signUpPage">
          <div className={classes.boxSignUp}>
            <div className={classes.it}>
              <div className={classes.itBox}>
                <div className={classes.formBox}>
                  <div className={classes.title}>SIGN UP</div>
                  <form action="" autoComplete="off">
                    <div className={classes.inputField}>
                      <MailOutlineIcon />
                      <input
                        type="email"
                        name="email"
                        placeholder="email"
                      ></input>
                    </div>
                    <div className={classes.inputField}>
                      <PersonIcon />
                      <input
                        type="text"
                        name="username"
                        placeholder="username"
                      ></input>
                    </div>
                    <div className={classes.inputField}>
                      <LockIcon />
                      <input
                        type="password"
                        name="password"
                        placeholder="password"
                      ></input>
                    </div>
                    <div className={classes.inputField}>
                      <LockIcon />
                      <input
                        type="password"
                        name="cfpassword"
                        placeholder="confirm password"
                      ></input>
                    </div>

                    <div className={classes.btnBox}>
                      <Button type="submit">Sign Up</Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className={classes.it}>
              <div className={classes.btnChangePage}>
                <Button
                  onClick={renderSignInPage}
                  variant="contained"
                  color="primary"
                >
                  Sign IN
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
