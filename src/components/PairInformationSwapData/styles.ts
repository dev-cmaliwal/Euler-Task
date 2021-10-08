import { Theme, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  pastSwapsContainer: {
    height: "500px",
    overflowY: "auto",
  },
  listContainer: {
    padding: "10px",
  },
  listContent: {
    fontSize: "14px",
    display: "flex",
    flexWrap: "wrap",
  },
  listContentTitle: {
    width: "100%",
    fontWeight: 600,
    display: "block",
    [theme.breakpoints.up("md")]: {
      width: "20%",
    },
  },
  listContentDesc: {
    width: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    [theme.breakpoints.up("md")]: {
      width: "80%",
    },
  },
  loadingContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "360px",
  },
}));
