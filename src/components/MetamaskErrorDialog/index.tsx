import React, { useEffect, useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Close from "@material-ui/icons/Close";
import Box from "@material-ui/core/Box";
import { useStyles } from "./style";

const MetamaskErrorDialog: React.FC = () => {
  const [error, setError] = useState<boolean>(false);
  const styles = useStyles();

  function getCookie(name: string): string | undefined {
    const match = document.cookie.match(
      new RegExp("(^| )" + name + "=([^;]+)")
    );
    if (match) return match[2];
  }

  useEffect(() => {
    if (getCookie("ErrorMetaMask") === "true") {
      setError(true);
    }
  }, []);
  const handleClose = () => {
    setError(!error);
  };

  return (
    <Dialog onClose={handleClose} open={error}>
      <Box className={styles.closeIcon}>
        <IconButton aria-label="Close" onClick={handleClose}>
          <Close />
        </IconButton>
      </Box>
      <Box className={styles.dialogContainer}>
        <img
          src="metamask.svg"
          alt="metamask logo"
          className={styles.dialogImage}
        />
        <Typography className={styles.dialogText} variant="h5">
          Metamask not found
        </Typography>
        <Typography className={styles.dialogSubText}>
          Please install metamask extension &amp; refresh the page
        </Typography>
      </Box>
    </Dialog>
  );
};

export default MetamaskErrorDialog;
