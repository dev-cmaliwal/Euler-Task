import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  imageIconContainer: {
    margin: "15px",
    display: "flex",
    alignItems: "center",
  },
  imageIcon: {
    width: "20px",
    marginRight: "20px",
  },
  card: {
    minHeight: "200px",
  },
  centerContainer: {
    display: "block",
    marginTop: "30px",
    textAlign: "center",
  },
  cardContent: {
    minHeight: "190px",
  },
  addressText: {
    overflowX: "auto",
    marginBottom: "20px",
  },
}));
