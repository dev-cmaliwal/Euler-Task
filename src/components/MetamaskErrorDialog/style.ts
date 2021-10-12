import { Theme, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  dialogImage: {
    width: "25%",
    margin: "auto",
    display: "flex",
    [theme.breakpoints.down("md")]: {
      width: "50%",
    },
  },
  dialogContainer: {
    padding: "25px",
    [theme.breakpoints.up("md")]: {
      padding: "75px",
    },
    backgroundColor: "white",
  },
  dialogText: {
    marginTop: "50px",
    marginBottom: "20px",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      marginTop: "20px",
    },
  },
  dialogSubText: {
    textAlign: "center",
  },
  closeIcon: {
    display: "flex",
    justifyContent: "end",
  },
}));
