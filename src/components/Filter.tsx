import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Filter.module.css";

type FilterType = {
  /** Style props */
  filterFlexShrink?: CSSProperties["flexShrink"];
};

const Filter: FunctionComponent<FilterType> = ({ filterFlexShrink }) => {
  const filterStyle: CSSProperties = useMemo(() => {
    return {
      flexShrink: filterFlexShrink,
    };
  }, [filterFlexShrink]);

  return (
    <div className={styles.filter} style={filterStyle}>
      <div className={styles.text}>絞り込み</div>
      <img className={styles.chevronDownIcon} alt="" src="/chevrondown.svg" />
    </div>
  );
};

export default Filter;
