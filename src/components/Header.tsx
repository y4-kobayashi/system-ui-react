import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Header.module.css";

type HeaderType = {
  /** Style props */
  headerBoxSizing?: CSSProperties["boxSizing"];
};

const Header: FunctionComponent<HeaderType> = ({ headerBoxSizing }) => {
  const headerStyle: CSSProperties = useMemo(() => {
    return {
      boxSizing: headerBoxSizing,
    };
  }, [headerBoxSizing]);

  return (
    <div className={styles.header} style={headerStyle}>
      <img className={styles.searchIcon} alt="" src="/search.svg" />
      <img className={styles.searchIcon} alt="" src="/calendarweek1.svg" />
      <img className={styles.searchIcon} alt="" src="/threedotsvertical.svg" />
      <img className={styles.maskGroupIcon} alt="" src="/mask-group1@2x.png" />
    </div>
  );
};

export default Header;
