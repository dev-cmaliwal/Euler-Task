import { Theme, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  listItem: {
    paddingLeft: "0 !important",
  },
  container: {
    margin: "auto",
    display: "flex",
    minHeight: "176px",
    alignItems: "center",
    justifyContent: "center",
  },
}));
