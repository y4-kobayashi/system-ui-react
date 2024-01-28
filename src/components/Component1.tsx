import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Component1.module.css";

type Component1Type = {
  scheduleIconId?: string;
  scheduleLabel?: string;

  /** Style props */
  divFlexShrink?: CSSProperties["flexShrink"];
  divColor?: CSSProperties["color"];
};

const Component1: FunctionComponent<Component1Type> = ({
  scheduleIconId,
  scheduleLabel,
  divFlexShrink,
  divColor,
}) => {
  const divStyle: CSSProperties = useMemo(() => {
    return {
      flexShrink: divFlexShrink,
    };
  }, [divFlexShrink]);

  const div1Style: CSSProperties = useMemo(() => {
    return {
      color: divColor,
    };
  }, [divColor]);

  return (
    <div className={styles.div} style={divStyle}>
      <img className={styles.calendarWeekIcon} alt="" src={scheduleIconId} />
      <div className={styles.div1} style={div1Style}>
        {scheduleLabel}
      </div>
    </div>
  );
};

export default Component1;
