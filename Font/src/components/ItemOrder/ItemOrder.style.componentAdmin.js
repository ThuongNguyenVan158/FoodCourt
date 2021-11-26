import { makeStyles } from "@mui/styles";
import "../../assets/css/index.css"
export const useStyles = makeStyles((theme) => ({
  root: {
    height: "30px",
    width: "30px",
    // borderRadius: '35px',
    // boxShadow: '0 2px 2px 0 rgb(28 29 31 / 24%), 0 0 2px 0 rgb(28 29 31 / 12%)',
    margin: "20px 20px 20px 20px",
    // backgroundColor: "var(--main-color)",
    "& button": {
      minWidth: "10px",
      height: "8px",
      borderRadius: "50%",
      color: "black",
      width:"10px",
    },
  },
  modal: {
    height: "700px",
    width: "700px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    padding: "20px",
    margin: "50px",
  },
  head: {
    margin: '30px 0px',
    padding: '0 20px',
    height: "50px",
    width: "100%",
    boxShadow: '0 2px 2px 0 rgb(28 29 31 / 24%), 0 0 2px 0 rgb(28 29 31 / 12%)',
  },
  items: {
    height: "530px",
    width: "100%",
    border: "1px solid #ddd",
  },
}));
