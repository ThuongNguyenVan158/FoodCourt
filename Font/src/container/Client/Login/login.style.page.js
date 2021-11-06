import { makeStyles } from "@mui/styles";
import bgIn from "./../../../assets/bglogin.png";
import bgUp from "./../../../assets/bgsignup.png";

export const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100%",
  },
  flexBox: {
    position: "relative",
  },
  signIn: {
    position: "absolute",
    top: 70,
    right: "0",
    width: "100%",
    height: "100%",
    transition: "all 1s",
  },
  signUp: {
    position: "absolute",
    top: 0,
    left: "0",
    transform: "translateX(100%)",
    width: "100%",
    height: "100%",
    transition: "1s 0.7s ease-in-out",
  },
  boxSignIn: {
    width: "100%",
    height: "100vh",
    display: "flex",
    background: `url(${bgIn}) no-repeat right center`,
    backgroundSize: "cover",
  },

  btnChangePage: {
    width: "100%",
    height: "80%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& button": {
      width: "150px",
      height: "40px",
      fontSize: "14px",
      fontWeight: "500",
      boxShadow: "0 10px 10px 0 #1976d255",
      borderRadius: "20px",
    },
  },

  boxSignUp: {
    width: "100%",
    height: "100vh",
    display: "flex",
    background: `url(${bgUp}) no-repeat right center`,
    backgroundSize: "cover",
  },
  it: {
    width: "50%",
    height: "100%",
  },
  itBox: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  formBox: {
    width: 300,
    height: 400,
    border: "1px solid #ddd",
    boxShadow: "0 10px 30px 0 #1976d250",
    textAlign: "center",
    borderRadius: "10px",
    padding: "20px",
  },
  title: {
    fontSize: "30px",
    fontWeight: "600",
    width: "100%",
    textAlign: "center",
  },
  inputField: {
    width: "100%",
    height: "40px",
    display: "flex",
    backgroundColor: "#f0f0f0",
    borderRadius: "20px",
    margin: "20px 0",
    "& svg": {
      fontSize: "25px",
      width: "50px",
      height: "40px",
      padding: "10px",
      color: "#acacac",
    },
    "& input": {
      border: "none",
      outline: "none",
      backgroundColor: "#f0f0f0",
      color: "#500",
      fontSize: "16px",
      fontWeight: "600",
    },
    boxShadow: "0 10px 30px 0 #1976d250",
  },
  btnBox: {
    "& button": {
      width: "150px",
      height: "40px",
      fontSize: "14px",
      fontWeight: "500",
      boxShadow: "0 10px 30px 0 #1976d250",
      borderRadius: "20px",
    },
  },
}));
