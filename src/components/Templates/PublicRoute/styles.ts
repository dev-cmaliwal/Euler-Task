import { Theme, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  pageContainer: {
    marginTop: "30px",
    paddingTop: "40px",
    minHeight: "calc(100vh - 100px)",
    [theme.breakpoints.up("md")]: {
      marginTop: "60px",
    },
  },
}));
