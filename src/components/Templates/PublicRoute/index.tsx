import React from "react";
import Header from "../Header";
import ErrorMetaMaskDialog from "../../MetamaskErrorDialog";
import { useStyles } from "./styles";

interface Props {
  children: React.ReactNode;
  pageBackgroundColor?: String;
}

const PublicRoute: React.FC<Props> = ({ children, pageBackgroundColor }) => {
  const styles = useStyles();
  return (
    <>
      <Header />
      <div className={styles.pageContainer + " " + pageBackgroundColor}>
        {children}
      </div>
      <ErrorMetaMaskDialog />
    </>
  );
};

export default PublicRoute;
