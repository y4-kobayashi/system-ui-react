import { FunctionComponent } from "react";
import Filter from "./Filter";
import styles from "./Heading.module.css";

const Heading: FunctionComponent = () => {
  return (
    <div className={styles.heading}>
      <b className={styles.b}>マイスポット</b>
      <Filter filterFlexShrink="unset" />
    </div>
  );
};

export default Heading;
