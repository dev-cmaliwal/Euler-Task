import React from "react";
import Header from "../Header";
import { useStyles } from "./styles";

const PublicRoute = (props: {
  children: React.ReactNode;
  pageBackgroundColor?: String;
}) => {
  const styles = useStyles();
  return (
    <>
      <Header />
      <div className={styles.pageContainer + " " + props.pageBackgroundColor}>
        {props.children}
      </div>
    </>
  );
};

export default PublicRoute;
