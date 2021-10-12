import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  textField: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "lightgray",
      color: "white",
    },
    "& .MuiInputLabel-outlined": {
      color: "lightgray",
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "red",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
      color: "white",
    },
    "& .MuiInputLabel-outlined.Mui-focused": {
      borderColor: "red",
    },
    "& .MuiOutlinedInput-input": {
      color: "white",
    },
  },
  submitBtn: {
    display: "flex !important",
    width: "100% !important",
  },
  container: {
    marginTop: "15px",
  },
  loading: {
    color: "white",
  },
}));
