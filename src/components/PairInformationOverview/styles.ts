import { Theme, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    height: "100%",
    overflowY: "auto",
  },
  listContainer: {
    fontSize: "14px",
    flexWrap: "wrap",
  },
  listTitle: {
    width: "100%",
    fontWeight: 600,
    display: "block",
    [theme.breakpoints.up("md")]: {
      width: "30%",
    },
  },
  listDesc: {
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "70%",
    },
  },
  loadingWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "360px",
    flexWrap: "wrap",
  },
}));
